export const MOISTURE_MODEL_VERSION = 'v82-active-1';

const HOUR_MS = 3600000;
const RAIN_THRESHOLD = 0.005;

function clamp(min, max, value) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}

function timeMs(value) {
  const numeric = Number(value);
  if (Number.isFinite(numeric)) return numeric > 1e12 ? numeric : numeric * 1000;
  return new Date(value).getTime();
}

function combineLoads(values) {
  const remaining = values.reduce((product, value) => product * (1 - clamp(0, 100, value) / 100), 1);
  return clamp(0, 100, (1 - remaining) * 100);
}

function valueAt(hourly, key, index, fallback = 0) {
  const value = Number(hourly?.[key]?.[index]);
  return Number.isFinite(value) ? value : fallback;
}

function hourlyDryingFactor(hourly, index) {
  const evap = Math.max(0, valueAt(hourly, 'evapotranspiration', index));
  const referenceEvap = Math.max(0, valueAt(hourly, 'et0_fao_evapotranspiration', index, evap));
  const vpd = Math.max(0, valueAt(hourly, 'vapour_pressure_deficit', index));
  const solar = Math.max(0, valueAt(hourly, 'shortwave_radiation', index));
  const humidity = clamp(0, 100, valueAt(hourly, 'relative_humidity_2m', index, 70));
  const wind = Math.max(0, valueAt(hourly, 'wind_speed_10m', index, 4));
  return clamp(.45, 1.9,
    .62 + Math.max(evap, referenceEvap) * 32 + vpd * .16 + solar / 1000 * .22 +
    Math.max(0, wind - 4) * .018 - Math.max(0, humidity - 82) * .006
  );
}

export function trailHydrology(trail = {}) {
  const profile = trail.soilProfile || {};
  const sensitivity = clamp(.7, 1.5, trail.sensitivity || 1);
  const canopy = clamp(0, 1, trail.canopy ?? .82);
  const effectiveDrying = clamp(.55, 1.5,
    trail.effectiveDrying || profile.soilDryingFactor || 1
  );
  const soilText = `${profile.dominantSoil || ''} ${profile.secondarySoil || ''}`;
  const clayRetention = /clay/i.test(soilText) ? 1.08 : 1;
  const vulnerability = clamp(.72, 1.55,
    sensitivity * (.88 + canopy * .18) * clayRetention / effectiveDrying
  );
  return {
    vulnerability,
    effectiveDrying,
    surfaceHalfLifeHours: clamp(12, 48, 20 * vulnerability),
    subsurfaceHalfLifeHours: clamp(30, 108, 52 * vulnerability)
  };
}

function rainPointsFromHourly(hourly = {}, now = Date.now(), lookbackDays = 14, minimumRain = RAIN_THRESHOLD) {
  const times = hourly.time || [];
  const precipitation = hourly.precipitation || [];
  const cutoff = now - lookbackDays * 24 * HOUR_MS;
  return precipitation.map((value, index) => ({
    index,
    time: timeMs(times[index]),
    rain: Math.max(0, Number(value) || 0)
  })).filter(point => point.time <= now && point.time >= cutoff && point.rain >= minimumRain);
}

function stormEventsFromPoints(rainy = []) {
  const events = [];
  rainy.slice().sort((a, b) => a.time - b.time).forEach(point => {
    const event = events.at(-1);
    if (!event || point.time - event.endedAt >= 12 * HOUR_MS) {
      events.push({startedAt: point.time, endedAt: point.time, totalRain: point.rain, peakRain1h: point.rain});
    } else {
      event.endedAt = point.time;
      event.totalRain += point.rain;
      event.peakRain1h = Math.max(event.peakRain1h, point.rain);
    }
  });
  return events.map(event => ({
    ...event,
    startedAt: new Date(event.startedAt).toISOString(),
    endedAt: new Date(event.endedAt).toISOString(),
    totalRain: Number(event.totalRain.toFixed(4)),
    peakRain1h: Number(event.peakRain1h.toFixed(4))
  }));
}

export function stormEventsFromHourly(hourly = {}, now = Date.now(), lookbackDays = 14) {
  return stormEventsFromPoints(rainPointsFromHourly(hourly, now, lookbackDays));
}

function authoritativeBands(authoritativeRainfall) {
  const raw = [12, 24, 48, 72].map(hours => Number(authoritativeRainfall?.[`r${hours}`]));
  if (raw.some(value => !Number.isFinite(value) || value < 0)) return null;
  const cumulative = [];
  raw.forEach((value, index) => cumulative.push(Math.max(value, index ? cumulative[index - 1] : 0)));
  return [
    {label: '0-12', from: 0, to: 12, target: cumulative[0]},
    {label: '12-24', from: 12, to: 24, target: cumulative[1] - cumulative[0]},
    {label: '24-48', from: 24, to: 48, target: cumulative[2] - cumulative[1]},
    {label: '48-72', from: 48, to: 72, target: cumulative[3] - cumulative[2]}
  ];
}

function reconcileRecentRain(hourly, authoritativeRainfall, now, rainQuality) {
  const rawPoints = rainPointsFromHourly(hourly, now, 14, Number.EPSILON);
  const bands = rainQuality === 'trusted' ? authoritativeBands(authoritativeRainfall) : null;
  if (!bands) return {events: stormEventsFromPoints(rawPoints.filter(point => point.rain >= RAIN_THRESHOLD)), rainBalance: null};

  const older = rawPoints.filter(point => now - point.time > 72 * HOUR_MS && point.rain >= RAIN_THRESHOLD);
  const recent = [];
  const balanceBands = bands.map(band => {
    const source = rawPoints.filter(point => {
      const ageHours = (now - point.time) / HOUR_MS;
      return ageHours >= band.from && ageHours < band.to;
    });
    const measured = source.reduce((sum, point) => sum + point.rain, 0);
    if (band.target > 0) {
      if (measured > 0) {
        source.forEach(point => recent.push({...point, rain: point.rain / measured * band.target, noaaReconciled: true}));
      } else {
        recent.push({
          time: now - (band.from + 1) * HOUR_MS,
          rain: band.target,
          noaaReconciled: true,
          syntheticTiming: true
        });
      }
    }
    return {band: band.label, target: Number(band.target.toFixed(4)), measured: Number(measured.toFixed(4)), allocated: Number(band.target.toFixed(4))};
  });
  const events = stormEventsFromPoints([...older, ...recent]);
  const target72 = bands.reduce((sum, band) => sum + band.target, 0);
  const allocated72 = recent.reduce((sum, point) => sum + point.rain, 0);
  return {
    events,
    rainBalance: {
      bands: balanceBands,
      target72: Number(target72.toFixed(4)),
      allocated72: Number(allocated72.toFixed(4)),
      balanced: Math.abs(target72 - allocated72) < .0001
    }
  };
}

function effectiveDryingHours(hourly, afterMs, now) {
  const times = hourly?.time || [];
  let total = 0;
  times.forEach((value, index) => {
    const timestamp = timeMs(value);
    if (timestamp > afterMs && timestamp <= now) total += hourlyDryingFactor(hourly, index);
  });
  return total;
}

function eventInitialLoads(event, hydrology) {
  const total = Math.max(0, Number(event.totalRain) || 0);
  const peak = Math.max(0, Number(event.peakRain1h) || 0);
  const intensity = clamp(.85, 1.15, .9 + peak * .2);
  const surface = clamp(0, 98, 100 * (1 - Math.exp(-total / .72)) * intensity);
  const retainedRain = Math.max(0, total - .25);
  const subsurface = clamp(0, 98,
    100 * (1 - Math.exp(-retainedRain / 1.8)) * clamp(.82, 1.18, hydrology.vulnerability)
  );
  return {surface, subsurface};
}

function modelStatus(wetness) {
  if (wetness < 24) return {key: 'green', label: 'Likely good'};
  if (wetness < 43) return {key: 'yellow', label: 'Use caution'};
  if (wetness < 63) return {key: 'orange', label: 'Wait'};
  return {key: 'red', label: 'Likely wet'};
}

function isRideableMoisture(surface, subsurface) {
  const wetness = combineLoads([surface, subsurface * .78]);
  return wetness < 43 && surface < 38 && subsurface < 45;
}

function averageForecastDrying(forecastHourly, now, hours = 24) {
  const times = forecastHourly?.time || [];
  const factors = [];
  times.forEach((value, index) => {
    const timestamp = timeMs(value);
    if (timestamp > now && timestamp <= now + hours * HOUR_MS) factors.push(hourlyDryingFactor(forecastHourly, index));
  });
  return factors.length ? factors.reduce((sum, value) => sum + value, 0) / factors.length : .85;
}

function rainfallRecoveryGate(events, hydrology, forecastHourly, recentRain72, now) {
  const recent = events.filter(event => {
    const endedAt = timeMs(event.endedAt);
    return endedAt <= now && now - endedAt <= 72 * HOUR_MS;
  }).sort((a, b) => timeMs(a.endedAt) - timeMs(b.endedAt));
  const latest = recent.at(-1) || null;
  const latestTotal = Math.max(0, Number(latest?.totalRain) || 0);
  const total72 = Math.max(latestTotal, Number(recentRain72) || 0);
  if (!latest || latestTotal < .1) return {active: false, readyAt: null, baseHours: 0, adjustedHours: 0, latestEvent: latest};

  let baseHours = latestTotal >= 3 ? 60
    : latestTotal >= 2 ? 48
    : latestTotal >= 1 ? 36
    : latestTotal >= .5 ? 24
    : latestTotal >= .25 ? 12
    : 6;
  // Repeated storms keep the recovery clock meaningful even when the newest
  // shower is smaller than the rain that established the saturated baseline.
  if (total72 >= 3) baseHours = Math.max(baseHours, 48);
  else if (total72 >= 2) baseHours = Math.max(baseHours, 36);
  else if (total72 >= 1) baseHours = Math.max(baseHours, 24);

  const forecastDrying = averageForecastDrying(forecastHourly, now);
  const weatherMultiplier = clamp(.8, 1.35, .85 / forecastDrying);
  const trailMultiplier = clamp(.8, 1.3, hydrology.vulnerability);
  const adjustedHours = clamp(baseHours * .75, baseHours * 1.5, baseHours * weatherMultiplier * trailMultiplier);
  const readyAtMs = timeMs(latest.endedAt) + adjustedHours * HOUR_MS;
  return {
    active: readyAtMs > now,
    readyAt: new Date(readyAtMs).toISOString(),
    baseHours,
    adjustedHours: Number(adjustedHours.toFixed(1)),
    latestEvent: latest,
    recentRain72: Number(total72.toFixed(4)),
    forecastDrying: Number(forecastDrying.toFixed(3))
  };
}

function forecastReadiness(surface, subsurface, hydrology, forecastHourly, now, earliestReadyAt = now) {
  const times = forecastHourly?.time || [];
  let safeHours = 0;
  for (let index = 0; index < times.length; index++) {
    const timestamp = timeMs(times[index]);
    if (timestamp <= now || timestamp > now + 120 * HOUR_MS) continue;
    const drying = hourlyDryingFactor(forecastHourly, index);
    surface *= Math.pow(.5, drying / hydrology.surfaceHalfLifeHours);
    subsurface *= Math.pow(.5, drying / hydrology.subsurfaceHalfLifeHours);
    const rain = Math.max(0, valueAt(forecastHourly, 'precipitation', index));
    if (rain >= RAIN_THRESHOLD) {
      const impulse = eventInitialLoads({totalRain: rain, peakRain1h: rain}, hydrology);
      surface = combineLoads([surface, impulse.surface]);
      subsurface = combineLoads([subsurface, impulse.subsurface]);
    }
    safeHours = timestamp >= earliestReadyAt && isRideableMoisture(surface, subsurface) ? safeHours + 1 : 0;
    if (safeHours >= 6) return new Date(timestamp - 5 * HOUR_MS).toISOString();
  }
  return null;
}

export function calculateShadowMoisture({trail = {}, historicalHourly = {}, forecastHourly = {}, authoritativeRainfall = null, now = Date.now(), rainQuality = 'trusted'} = {}) {
  const hydrology = trailHydrology(trail);
  const reconciliation = reconcileRecentRain(historicalHourly, authoritativeRainfall, now, rainQuality);
  const events = reconciliation.events;
  const surfaceLoads = [];
  const subsurfaceLoads = [];
  let dominantStorm = null;
  let dominantContribution = -1;
  events.forEach(event => {
    const endedAt = new Date(event.endedAt).getTime();
    const dryingHours = effectiveDryingHours(historicalHourly, endedAt, now);
    const initial = eventInitialLoads(event, hydrology);
    const surface = initial.surface * Math.pow(.5, dryingHours / hydrology.surfaceHalfLifeHours);
    const subsurface = initial.subsurface * Math.pow(.5, dryingHours / hydrology.subsurfaceHalfLifeHours);
    surfaceLoads.push(surface);
    subsurfaceLoads.push(subsurface);
    const contribution = combineLoads([surface, subsurface * .78]);
    if (contribution > dominantContribution) {
      dominantContribution = contribution;
      dominantStorm = {...event, currentContribution: Number(contribution.toFixed(1))};
    }
  });
  const surfaceMoisture = combineLoads(surfaceLoads);
  const subsurfaceSaturation = combineLoads(subsurfaceLoads);
  const recoveryGate = rainfallRecoveryGate(
    events,
    hydrology,
    forecastHourly,
    reconciliation.rainBalance?.target72 ?? authoritativeRainfall?.r72,
    now
  );
  const moistureWetnessScore = Math.round(combineLoads([surfaceMoisture, subsurfaceSaturation * .78]));
  // A trail cannot be presented as green while a meaningful rainfall
  // recovery hold is still active, even when its calculated surface has
  // already crossed the raw moisture threshold.
  const wetnessScore = recoveryGate.active ? Math.max(24, moistureWetnessScore) : moistureWetnessScore;
  const rideability = 100 - wetnessScore;
  const status = modelStatus(wetnessScore);
  const earliestReadyAt = recoveryGate.readyAt ? timeMs(recoveryGate.readyAt) : now;
  const readyNow = isRideableMoisture(surfaceMoisture, subsurfaceSaturation) && now >= earliestReadyAt;
  const readyAt = readyNow ? new Date(now).toISOString() : forecastReadiness(
    surfaceMoisture, subsurfaceSaturation, hydrology, forecastHourly, now, earliestReadyAt
  );
  const biggestStorm = events.slice().sort((a, b) => b.totalRain - a.totalRain)[0] || null;
  const cardStorm = events.filter(event => {
    const ageHours = (now - new Date(event.endedAt).getTime()) / HOUR_MS;
    return ageHours > 72 && ageHours <= 168 && event.totalRain >= .5;
  }).sort((a, b) => b.totalRain - a.totalRain)[0] || null;
  const soilConfidence = String(trail.soilProfile?.confidence || 'Low');
  const confidence = rainQuality === 'trusted' && !/^Low$/i.test(soilConfidence)
    ? 'Medium-high'
    : rainQuality === 'unavailable' ? 'Low' : 'Medium';
  return {
    modelVersion: MOISTURE_MODEL_VERSION,
    calculatedAt: new Date(now).toISOString(),
    shadowOnly: true,
    wetnessScore,
    moistureWetnessScore,
    rideability,
    status,
    readyAt,
    surfaceMoisture: Number(surfaceMoisture.toFixed(1)),
    subsurfaceSaturation: Number(subsurfaceSaturation.toFixed(1)),
    confidence,
    hydrology: {
      vulnerability: Number(hydrology.vulnerability.toFixed(3)),
      surfaceHalfLifeHours: Number(hydrology.surfaceHalfLifeHours.toFixed(1)),
      subsurfaceHalfLifeHours: Number(hydrology.subsurfaceHalfLifeHours.toFixed(1))
    },
    eventHistory: events,
    rainBalance: reconciliation.rainBalance,
    totalRain14d: Number(events.reduce((sum, event) => sum + event.totalRain, 0).toFixed(3)),
    biggestStorm,
    dominantStorm,
    recoveryGate,
    cardStorm
  };
}

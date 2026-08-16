export const MOISTURE_MODEL_VERSION = 'v80-shadow-1';

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

export function stormEventsFromHourly(hourly = {}, now = Date.now(), lookbackDays = 14) {
  const times = hourly.time || [];
  const precipitation = hourly.precipitation || [];
  const cutoff = now - lookbackDays * 24 * HOUR_MS;
  const rainy = precipitation.map((value, index) => ({
    index,
    time: timeMs(times[index]),
    rain: Math.max(0, Number(value) || 0)
  })).filter(point => point.time <= now && point.time >= cutoff && point.rain >= RAIN_THRESHOLD);
  const events = [];
  rainy.forEach(point => {
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

function calibrateRecentEvents(events, authoritativeRainfall, now, rainQuality) {
  const target = Number(authoritativeRainfall?.r72);
  if (rainQuality !== 'trusted' || !Number.isFinite(target) || target < 0) return events;
  const cutoff = now - 72 * HOUR_MS;
  const recent = events.filter(event => new Date(event.endedAt).getTime() >= cutoff);
  const measured = recent.reduce((sum, event) => sum + event.totalRain, 0);
  if (target >= RAIN_THRESHOLD && measured < RAIN_THRESHOLD) {
    return [...events, {
      startedAt: new Date(now - HOUR_MS).toISOString(),
      endedAt: new Date(now - HOUR_MS).toISOString(),
      totalRain: Number(target.toFixed(4)),
      peakRain1h: Number(Math.min(target, Math.max(.01, target / 6)).toFixed(4)),
      noaaCalibrated: true
    }];
  }
  if (measured < RAIN_THRESHOLD) return events;
  const ratio = clamp(.25, 4, target / measured);
  return events.map(event => new Date(event.endedAt).getTime() < cutoff ? event : {
    ...event,
    totalRain: Number((event.totalRain * ratio).toFixed(4)),
    peakRain1h: Number((event.peakRain1h * ratio).toFixed(4)),
    noaaCalibrated: true
  });
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
  if (wetness < 63) return {key: 'orange', label: 'Marginal'};
  return {key: 'red', label: 'Likely wet'};
}

function forecastReadiness(surface, subsurface, hydrology, forecastHourly, now) {
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
    const wetness = combineLoads([surface, subsurface * .78]);
    safeHours = wetness < 43 ? safeHours + 1 : 0;
    if (safeHours >= 6) return new Date(timestamp - 5 * HOUR_MS).toISOString();
  }
  return null;
}

export function calculateShadowMoisture({trail = {}, historicalHourly = {}, forecastHourly = {}, authoritativeRainfall = null, now = Date.now(), rainQuality = 'trusted'} = {}) {
  const hydrology = trailHydrology(trail);
  const events = calibrateRecentEvents(
    stormEventsFromHourly(historicalHourly, now, 14), authoritativeRainfall, now, rainQuality
  );
  const surfaceLoads = [];
  const subsurfaceLoads = [];
  events.forEach(event => {
    const endedAt = new Date(event.endedAt).getTime();
    const dryingHours = effectiveDryingHours(historicalHourly, endedAt, now);
    const initial = eventInitialLoads(event, hydrology);
    surfaceLoads.push(initial.surface * Math.pow(.5, dryingHours / hydrology.surfaceHalfLifeHours));
    subsurfaceLoads.push(initial.subsurface * Math.pow(.5, dryingHours / hydrology.subsurfaceHalfLifeHours));
  });
  const surfaceMoisture = combineLoads(surfaceLoads);
  const subsurfaceSaturation = combineLoads(subsurfaceLoads);
  const wetnessScore = Math.round(combineLoads([surfaceMoisture, subsurfaceSaturation * .78]));
  const rideability = 100 - wetnessScore;
  const status = modelStatus(wetnessScore);
  const readyAt = wetnessScore < 43 ? new Date(now).toISOString() : forecastReadiness(
    surfaceMoisture, subsurfaceSaturation, hydrology, forecastHourly, now
  );
  const biggestStorm = events.slice().sort((a, b) => b.totalRain - a.totalRain)[0] || null;
  const soilConfidence = String(trail.soilProfile?.confidence || 'Low');
  const confidence = rainQuality === 'trusted' && !/^Low$/i.test(soilConfidence)
    ? 'Medium-high'
    : rainQuality === 'unavailable' ? 'Low' : 'Medium';
  return {
    modelVersion: MOISTURE_MODEL_VERSION,
    calculatedAt: new Date(now).toISOString(),
    shadowOnly: true,
    wetnessScore,
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
    totalRain14d: Number(events.reduce((sum, event) => sum + event.totalRain, 0).toFixed(3)),
    biggestStorm
  };
}

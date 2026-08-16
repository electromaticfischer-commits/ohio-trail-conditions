// Setup type definitions for built-in Supabase Runtime APIs.
// @ts-ignore The jsr type package is resolved by the Supabase Edge runtime.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import {calculateShadowMoisture, MOISTURE_MODEL_VERSION} from '../_shared/moisture-model.js';

// @ts-ignore Deno is provided by the Supabase Edge runtime.
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
// @ts-ignore Deno is provided by the Supabase Edge runtime.
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const MRMS_SERVICE = 'https://mapservices.weather.noaa.gov/raster/rest/services/obs/mrms_qpe/ImageServer';
const MRMS_PRODUCTS: Record<number, string> = {
  12: 'conus_QPE_12H',
  24: 'conus_QPE_24H',
  48: 'conus_QPE_48H',
  72: 'conus_QPE_72H'
};
const PERIODS = [12, 24, 48, 72];
const VALID_STATES = new Set(['OH', 'WV', 'IN', 'PA', 'MI', 'KY']);
const NOAA_TRAIL_BATCH = 30;
const OPEN_METEO_BATCH = 20;
const SAMPLE_COUNT = 25;
const ZERO_EPSILON = 0.005;
const MONOTONIC_TOLERANCE = 0.03;
const MIN_STORM_TOTAL = 0.20;
const MAX_SOURCE_RATIO = 3;
const TRUSTED_HOLD_MS = 24 * 60 * 60 * 1000;
const MOISTURE_HISTORY_DAYS = 14;
const PREVIOUS_SNAPSHOT_HOLD_MS = 12 * 60 * 60 * 1000;

type Trail = {
  id: string;
  name: string;
  state_code: string;
  lat: number;
  lon: number;
  weather_lat: number;
  weather_lon: number;
  data: Record<string, unknown>;
  previous_observed_at?: string | null;
  previous_quality?: string | null;
  previous_result?: Record<string, unknown> | null;
};

type Product = {
  hours: number;
  objectId: number;
  subset: string;
  validEndTime: number;
};

type Rainfall = {
  r12: number;
  r24: number;
  r48: number;
  r72: number;
  r24Min?: number;
  r24Max?: number;
  r72Min?: number;
  r72Max?: number;
  sampleRadius?: number;
  sampleCount?: number;
  lastRain?: string;
};

type MrmsStats = ReturnType<typeof rainStats> & {
  hours: number;
  httpStatus: number;
  returnedSamples: number;
  durationMs: number;
  raster: Product;
  requestMode: string;
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {'content-type': 'application/json'}
  });
}

async function readJson(response: Response) {
  const data = await response.json();
  if (!response.ok || data?.error) {
    throw new Error(data?.error?.message || `HTTP ${response.status}`);
  }
  return data;
}

async function fetchTimed(input: string, init: RequestInit = {}, timeoutMs = 30000, label = 'External request') {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, {...init, signal: controller.signal});
  } catch (error) {
    if (controller.signal.aborted) throw new Error(`${label} timed out after ${Math.round(timeoutMs / 1000)} seconds`);
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

async function rest(path: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers);
  headers.set('apikey', SERVICE_ROLE_KEY);
  headers.set('authorization', `Bearer ${SERVICE_ROLE_KEY}`);
  if (!headers.has('content-type')) headers.set('content-type', 'application/json');
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {...options, headers});
}

async function verifyToken(token: string) {
  const response = await rest('rpc/verify_weather_refresh_token', {
    method: 'POST',
    body: JSON.stringify({p_token: token})
  });
  return Boolean(await readJson(response));
}

async function loadTrails(state: string): Promise<Trail[]> {
  const response = await rest('rpc/get_weather_refresh_trails', {
    method: 'POST',
    body: JSON.stringify({p_state: state})
  });
  return await readJson(response);
}

function chunks<T>(items: T[], size: number) {
  const result: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

function ringPoints(lat: number, lon: number, radiusMiles: number, count: number) {
  const lonMiles = Math.max(1, 69.172 * Math.cos(lat * Math.PI / 180));
  return Array.from({length: count}, (_, index) => {
    const angle = index / count * Math.PI * 2;
    return [
      lon + Math.sin(angle) * radiusMiles / lonMiles,
      lat + Math.cos(angle) * radiusMiles / 69
    ];
  });
}

function rainfallPlan(trail: Trail) {
  const lat = Number(trail.weather_lat);
  const lon = Number(trail.weather_lon);
  const inner = [[lon, lat], ...ringPoints(lat, lon, 2, 8)];
  const outer = ringPoints(lat, lon, 5, 16);
  return {
    points: [...inner, ...outer],
    weights: [...inner.map(() => 0.70 / inner.length), ...outer.map(() => 0.30 / outer.length)]
  };
}

function validRainInches(value: unknown) {
  const millimeters = Number(value);
  if (!Number.isFinite(millimeters) || millimeters < 0 || millimeters > 1000) return null;
  const inches = millimeters / 25.4;
  return inches <= 20 ? inches : null;
}

function weightedMedian(entries: Array<{value: number; weight: number}>) {
  const sorted = entries.slice().sort((a, b) => a.value - b.value);
  const total = sorted.reduce((sum, entry) => sum + entry.weight, 0);
  let cumulative = 0;
  for (const entry of sorted) {
    cumulative += entry.weight;
    if (cumulative >= total / 2) return entry.value;
  }
  return sorted[sorted.length - 1].value;
}

function rainStats(values: unknown[], points: number[][], weights: number[]) {
  const entries: Array<{value: number; weight: number; raw: number; point: number[]}> = [];
  values.forEach((rawValue, index) => {
    const value = validRainInches(rawValue);
    if (value !== null) {
      entries.push({value, weight: Number(weights[index]) || 0, raw: Number(rawValue), point: points[index]});
    }
  });
  if (!entries.length) throw new Error('MRMS returned no usable rainfall samples');
  const total = entries.reduce((sum, entry) => sum + entry.weight, 0) || 1;
  entries.forEach(entry => entry.weight /= total);
  const valuesSorted = entries.map(entry => entry.value).sort((a, b) => a - b);
  return {
    median: weightedMedian(entries),
    average: entries.reduce((sum, entry) => sum + entry.value * entry.weight, 0),
    min: valuesSorted[0],
    max: valuesSorted[valuesSorted.length - 1],
    count: entries.length,
    rawMin: Math.min(...entries.map(entry => entry.raw)),
    rawMax: Math.max(...entries.map(entry => entry.raw)),
    sampleDetails: entries.map(entry => ({
      lon: entry.point[0],
      lat: entry.point[1],
      weight: entry.weight,
      raw: entry.raw,
      inches: entry.value
    }))
  };
}

async function fetchProducts(): Promise<Record<number, Product>> {
  const names = Object.values(MRMS_PRODUCTS);
  const params = new URLSearchParams({
    f: 'json',
    where: names.map(name => `idp_subset = '${name}'`).join(' OR '),
    outFields: 'objectid,idp_subset,idp_validendtime',
    returnGeometry: 'false'
  });
  const catalog = await readJson(await fetchTimed(`${MRMS_SERVICE}/query?${params}`, {}, 20000, 'NOAA catalog'));
  const products: Record<number, Product> = {};
  for (const hours of PERIODS) {
    const matches = (catalog.features || [])
      .map((feature: {attributes?: Record<string, unknown>}) => feature.attributes || {})
      .filter((attributes: Record<string, unknown>) => attributes.idp_subset === MRMS_PRODUCTS[hours])
      .sort((a: Record<string, unknown>, b: Record<string, unknown>) =>
        Number(b.idp_validendtime) - Number(a.idp_validendtime) || Number(b.objectid) - Number(a.objectid)
      );
    if (!matches.length) throw new Error(`Expected at least one ${MRMS_PRODUCTS[hours]} raster`);
    const newest = matches[0];
    products[hours] = {
      hours,
      objectId: Number(newest.objectid),
      subset: String(newest.idp_subset),
      validEndTime: Number(newest.idp_validendtime)
    };
  }
  const times = Object.values(products).map(product => product.validEndTime);
  if (times.some(time => !Number.isFinite(time)) || Math.max(...times) - Math.min(...times) > 3600000) {
    throw new Error('MRMS product timestamps differ by more than one hour');
  }
  return products;
}

async function fetchMrmsBatch(trails: Trail[], products: Record<number, Product>) {
  const plans = trails.map(rainfallPlan);
  const points = plans.flatMap(plan => plan.points);
  const byTrail = new Map<string, Record<number, MrmsStats>>();
  trails.forEach(trail => byTrail.set(trail.id, {}));

  await Promise.all(PERIODS.map(async hours => {
    const product = products[hours];
    const body = new URLSearchParams({
      f: 'json',
      geometryType: 'esriGeometryMultipoint',
      geometry: JSON.stringify({points, spatialReference: {wkid: 4326}}),
      returnFirstValueOnly: 'true',
      interpolation: 'RSP_NearestNeighbor',
      mosaicRule: JSON.stringify({
        mosaicMethod: 'esriMosaicLockRaster',
        lockRasterIds: [product.objectId]
      })
    });
    const started = Date.now();
    const data = await readJson(await fetchTimed(`${MRMS_SERVICE}/getSamples`, {
      method: 'POST',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      body
    }, 25000, `NOAA ${hours}-hour samples`));
    const samples = Array.isArray(data.samples) ? data.samples : [];
    if (samples.length !== points.length) {
      throw new Error(`MRMS ${hours}h returned ${samples.length}/${points.length} samples`);
    }
    if (samples.some((sample: {rasterId?: unknown}) => Number(sample.rasterId) !== product.objectId)) {
      throw new Error(`MRMS ${hours}h returned an unexpected raster`);
    }
    trails.forEach((trail, trailIndex) => {
      const start = trailIndex * SAMPLE_COUNT;
      const trailSamples = samples.slice(start, start + SAMPLE_COUNT);
      const values = trailSamples.map((sample: {value?: unknown; values?: unknown[]}) => sample.value ?? sample.values?.[0]);
      const stats = rainStats(values, plans[trailIndex].points, plans[trailIndex].weights);
      byTrail.get(trail.id)![hours] = {
        ...stats,
        hours,
        httpStatus: 200,
        returnedSamples: trailSamples.length,
        durationMs: Date.now() - started,
        raster: product,
        requestMode: `Server batch of ${trails.length} trails`
      };
    });
  }));
  return byTrail;
}

async function fetchOpenMeteo(trails: Trail[]) {
  const endpoint = 'https://api.open-meteo.com/v1/forecast';
  const params = new URLSearchParams({
    latitude: trails.map(trail => trail.weather_lat).join(','),
    longitude: trails.map(trail => trail.weather_lon).join(','),
    hourly: 'temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m,shortwave_radiation,vapour_pressure_deficit,evapotranspiration,et0_fao_evapotranspiration',
    precipitation_unit: 'inch',
    timeformat: 'unixtime',
    timezone: 'GMT'
  });
  params.set('past_days', String(MOISTURE_HISTORY_DAYS));
  params.set('forecast_days', '6');
  params.set('temperature_unit', 'fahrenheit');
  params.set('wind_speed_unit', 'mph');
  const data = await readJson(await fetchTimed(
    `${endpoint}?${params}`,
    {},
    60000,
    'Open-Meteo combined history and forecast'
  ));
  const rows = Array.isArray(data) ? data : [data];
  if (rows.length !== trails.length) {
    throw new Error(`Open-Meteo returned ${rows.length}/${trails.length} locations`);
  }
  return rows.map(row => row.hourly);
}

async function fetchOpenMeteoForState(trails: Trail[]) {
  const live = new Map<string, Record<string, unknown>>();
  const historical = new Map<string, Record<string, unknown>>();
  await Promise.all(chunks(trails, OPEN_METEO_BATCH).map(async group => {
    const rows = await fetchOpenMeteo(group);
    group.forEach((trail, index) => {
      live.set(trail.id, rows[index]);
      historical.set(trail.id, rows[index]);
    });
  }));
  return {live, historical};
}

function timeMs(value: unknown) {
  const number = Number(value);
  return Number.isFinite(number) ? (number < 100000000000 ? number * 1000 : number) : NaN;
}

function sumRange(values: unknown[], times: unknown[], hours: number) {
  const cutoff = Date.now() - hours * 3600000;
  return (values || []).reduce<number>((sum, value, index) => {
    const timestamp = timeMs((times || [])[index]);
    return timestamp <= Date.now() && timestamp >= cutoff ? sum + (Number(value) || 0) : sum;
  }, 0);
}

function averageRange(values: unknown[], times: unknown[], hours: number) {
  const cutoff = Date.now() - hours * 3600000;
  const selected = (values || []).filter((_value, index) => {
    const timestamp = timeMs((times || [])[index]);
    return timestamp <= Date.now() && timestamp >= cutoff;
  }).map(Number).filter(Number.isFinite);
  return selected.length ? selected.reduce((sum, value) => sum + value, 0) / selected.length : 0;
}

function lastRainLabel(values: unknown[], times: unknown[]) {
  let latest: number | null = null;
  (values || []).forEach((value, index) => {
    const timestamp = timeMs((times || [])[index]);
    if (timestamp <= Date.now() && Number(value) >= ZERO_EPSILON && (latest === null || timestamp > latest)) {
      latest = timestamp;
    }
  });
  if (latest === null) return '3+ days ago';
  const hours = Math.max(0, Math.floor((Date.now() - latest) / 3600000));
  if (hours < 1) return 'Now';
  if (hours < 48) return `${hours} hr ago`;
  return `${Math.max(2, Math.floor(hours / 24))} days ago`;
}

function historicalSignals(hourly: Record<string, unknown>) {
  const precipitation = (hourly.precipitation || []) as unknown[];
  const times = (hourly.time || []) as unknown[];
  const now = Date.now();
  const rainy = precipitation.map((value, index) => ({value: Number(value) || 0, time: timeMs(times[index]), index}))
    .filter(point => point.time <= now && point.time >= now - 168 * 3600000 && point.value >= ZERO_EPSILON);
  const latest = rainy.at(-1);
  if (!latest) return {lastRainAt: null, rain168: 0, maxRain1h: 0, eventStartAt: null, eventRain: 0, antecedentRain168: 0, dryingWeatherFactor: 1};

  let eventStartIndex = latest.index;
  let dryHours = 0;
  for (let index = latest.index - 1; index >= 0; index--) {
    const timestamp = timeMs(times[index]);
    if (timestamp < now - 168 * 3600000) break;
    if ((Number(precipitation[index]) || 0) >= ZERO_EPSILON) {
      eventStartIndex = index;
      dryHours = 0;
    } else if (++dryHours >= 12) break;
  }

  const rain168 = sumRange(precipitation, times, 168);
  const eventRain = precipitation.reduce<number>((sum, value, index) => {
    const timestamp = timeMs(times[index]);
    return index >= eventStartIndex && timestamp <= latest.time ? sum + (Number(value) || 0) : sum;
  }, 0);
  const temperatures = (hourly.temperature_2m || []) as unknown[];
  const humidity = (hourly.relative_humidity_2m || []) as unknown[];
  const cloud = (hourly.cloud_cover || []) as unknown[];
  const wind = (hourly.wind_speed_10m || []) as unknown[];
  const dryingFactors = times.map((value, index) => ({
    time: timeMs(value), temperature: Number(temperatures[index]), humidity: Number(humidity[index]),
    cloud: Number(cloud[index]), wind: Number(wind[index])
  })).filter(point => point.time > latest.time && point.time <= now && [point.temperature, point.humidity, point.cloud, point.wind].every(Number.isFinite))
    .map(point => Math.max(0.55, Math.min(1.45, 1 + (point.temperature - 65) * 0.008 + (point.wind - 5) * 0.025 - (point.humidity - 65) * 0.006 - (point.cloud - 50) * 0.002)));
  return {
    lastRainAt: new Date(latest.time).toISOString(), rain168,
    maxRain1h: Math.max(...rainy.filter(point => point.index >= eventStartIndex).map(point => point.value), 0),
    eventStartAt: new Date(timeMs(times[eventStartIndex])).toISOString(), eventRain,
    antecedentRain168: Math.max(0, rain168 - eventRain),
    dryingWeatherFactor: dryingFactors.length ? dryingFactors.reduce((sum, value) => sum + value, 0) / dryingFactors.length : 1
  };
}

function stormHistory(trail: Trail, rainfall: Rainfall, signals: ReturnType<typeof historicalSignals>) {
  if (!signals.lastRainAt || !signals.eventStartAt) return null;
  const now = Date.now();
  let lastRainMs = new Date(signals.lastRainAt).getTime();
  if ((Number(rainfall.r12) || 0) >= ZERO_EPSILON) lastRainMs = Math.max(lastRainMs, now - 12 * 3600000);
  else if ((Number(rainfall.r24) || 0) - (Number(rainfall.r12) || 0) >= ZERO_EPSILON) lastRainMs = Math.max(lastRainMs, now - 24 * 3600000);
  else if ((Number(rainfall.r48) || 0) - (Number(rainfall.r24) || 0) >= ZERO_EPSILON) lastRainMs = Math.max(lastRainMs, now - 48 * 3600000);
  else if ((Number(rainfall.r72) || 0) - (Number(rainfall.r48) || 0) >= ZERO_EPSILON) lastRainMs = Math.max(lastRainMs, now - 72 * 3600000);
  const lastRainAt = new Date(lastRainMs).toISOString();
  const previous = (trail.previous_result?.stormHistory || null) as Record<string, unknown> | null;
  const previousEnd = previous?.lastRainAt ? new Date(String(previous.lastRainAt)).getTime() : NaN;
  const eventStart = new Date(signals.eventStartAt).getTime();
  const sameEvent = Number.isFinite(previousEnd) && eventStart <= previousEnd + 12 * 3600000;
  return {
    eventStartAt: sameEvent ? previous?.eventStartAt || signals.eventStartAt : signals.eventStartAt,
    lastRainAt,
    peakRain24: Math.max(sameEvent ? Number(previous?.peakRain24) || 0 : 0, Number(rainfall.r24) || 0),
    peakRain72: Math.max(sameEvent ? Number(previous?.peakRain72) || 0 : 0, Number(rainfall.r72) || 0, signals.eventRain),
    peakRain1h: signals.maxRain1h,
    antecedentRain168: Math.max(sameEvent ? Number(previous?.antecedentRain168) || 0 : 0, signals.antecedentRain168),
    rain168: signals.rain168,
    dryingWeatherFactor: signals.dryingWeatherFactor
  };
}

function rainfallFromHourly(hourly: Record<string, unknown>): Rainfall {
  const precipitation = (hourly.precipitation || []) as unknown[];
  const time = (hourly.time || []) as unknown[];
  const r12 = sumRange(precipitation, time, 12);
  const r24 = sumRange(precipitation, time, 24);
  const r48 = sumRange(precipitation, time, 48);
  const r72 = sumRange(precipitation, time, 72);
  return {
    r12, r24, r48, r72,
    r24Min: r24, r24Max: r24, r72Min: r72, r72Max: r72,
    sampleRadius: 0, sampleCount: 1,
    lastRain: lastRainLabel(precipitation, time)
  };
}

function allZero(rainfall: Rainfall) {
  return PERIODS.every(hours => (Number(rainfall[`r${hours}` as keyof Rainfall]) || 0) < ZERO_EPSILON);
}

function meaningful(rainfall?: Rainfall | null) {
  return (Number(rainfall?.r72) || 0) >= ZERO_EPSILON;
}

function orderingInvalid(rainfall: Rainfall) {
  const values = PERIODS.map(hours => Number(rainfall[`r${hours}` as keyof Rainfall]) || 0);
  return values.some((value, index) => index > 0 && value + MONOTONIC_TOLERANCE < values[index - 1]);
}

function previousRainfall(trail: Trail): Rainfall | null {
  const previous = trail.previous_result || {};
  if (!trail.previous_observed_at) return null;
  const age = Date.now() - new Date(trail.previous_observed_at).getTime();
  if (!Number.isFinite(age) || age < 0 || age > TRUSTED_HOLD_MS) return null;
  const rainfall = {
    r12: Number(previous.rain12),
    r24: Number(previous.rain24),
    r48: Number(previous.rain48),
    r72: Number(previous.rain72),
    r24Min: Number(previous.rain24Min),
    r24Max: Number(previous.rain24Max),
    r72Min: Number(previous.rain72Min),
    r72Max: Number(previous.rain72Max),
    sampleRadius: Number(previous.rainSampleRadius),
    sampleCount: Number(previous.rainSampleCount),
    lastRain: String(previous.lastRain || '')
  };
  return PERIODS.every(hours => Number.isFinite(Number(rainfall[`r${hours}` as keyof Rainfall]))) ? rainfall : null;
}

function abruptDrop(current: Rainfall, cached: Rainfall | null, previousAt?: string | null) {
  if (!cached || !previousAt || !meaningful(cached)) return false;
  const age = Date.now() - new Date(previousAt).getTime();
  const old72 = Number(cached.r72) || 0;
  const new72 = Number(current.r72) || 0;
  if (old72 < MIN_STORM_TOTAL) return false;
  const allowedRatio = age <= 6 * 3600000 ? 0.55 : age <= 12 * 3600000 ? 0.35 : 0.20;
  return new72 < old72 * allowedRatio && old72 - new72 > 0.15;
}

function disagreement(a: Rainfall, b: Rainfall) {
  const first = Number(a.r72) || 0;
  const second = Number(b.r72) || 0;
  if (Math.max(first, second) < MIN_STORM_TOTAL) return false;
  if (Math.min(first, second) < ZERO_EPSILON) return true;
  return Math.max(first, second) / Math.min(first, second) > MAX_SOURCE_RATIO;
}

function mrmsLastRain(rainfall: Rainfall, fallback: string) {
  if (rainfall.r12 >= ZERO_EPSILON) return 'Within 12 hr';
  if (rainfall.r24 - rainfall.r12 >= ZERO_EPSILON) return '12–24 hr ago';
  if (rainfall.r48 - rainfall.r24 >= ZERO_EPSILON) return '1–2 days ago';
  if (rainfall.r72 - rainfall.r48 >= ZERO_EPSILON) return '2–3 days ago';
  return fallback || '3+ days ago';
}

function normalizedMrms(stats: Record<number, MrmsStats>): Rainfall {
  return {
    r12: stats[12].median,
    r24: stats[24].median,
    r48: stats[48].median,
    r72: stats[72].median,
    r24Min: stats[24].min,
    r24Max: stats[24].max,
    r72Min: stats[72].min,
    r72Max: stats[72].max,
    sampleRadius: 5,
    sampleCount: stats[12].count
  };
}

function weatherValues(hourly: Record<string, unknown>) {
  const time = (hourly.time || []) as unknown[];
  const temperatures = (hourly.temperature_2m || []) as unknown[];
  const recentTemperatures = temperatures.filter((_value, index) => {
    const timestamp = timeMs(time[index]);
    return timestamp <= Date.now() && timestamp >= Date.now() - 12 * 3600000;
  }).map(Number).filter(Number.isFinite);
  const current = temperatures.reduce((latest: {time: number; value: number}, value, index) => {
    const timestamp = timeMs(time[index]);
    return timestamp <= Date.now() && timestamp > latest.time
      ? {time: timestamp, value: Number(value)}
      : latest;
  }, {time: -Infinity, value: NaN});
  return {
    humidity: averageRange((hourly.relative_humidity_2m || []) as unknown[], time, 12),
    wind: averageRange((hourly.wind_speed_10m || []) as unknown[], time, 12),
    cloud: averageRange((hourly.cloud_cover || []) as unknown[], time, 12),
    tempMin: recentTemperatures.length ? Math.min(...recentTemperatures) : 50,
    temperature: Number.isFinite(current.value) ? current.value : (recentTemperatures.at(-1) || 50)
  };
}

function buildResult(
  trail: Trail,
  liveHourly: Record<string, unknown>,
  historicalHourly: Record<string, unknown>,
  mrmsStats?: Record<number, MrmsStats>,
  mrmsError = ''
) {
  const fallback = rainfallFromHourly(historicalHourly || liveHourly);
  const cached = previousRainfall(trail);
  let rainfall = fallback;
  let rainSource = 'Open-Meteo historical forecast';
  let rainWarning = '';
  let rainDataUncertain = false;
  let quality = 'fallback';
  let problem = '';
  let comparisonWarning = false;
  let diagnostics: Record<string, unknown> = {
    ok: false,
    updatedAt: new Date().toISOString(),
    error: mrmsError || 'NOAA data was not available'
  };

  if (mrmsStats) {
    const mrms = normalizedMrms(mrmsStats);
    if (allZero(mrms) && meaningful(fallback)) {
      problem = 'NOAA returned a dry field while the independent source reported meaningful rainfall.';
    } else if (orderingInvalid(mrms)) {
      problem = 'NOAA rolling totals were internally inconsistent.';
    } else if (abruptDrop(mrms, cached, trail.previous_observed_at)) {
      problem = 'NOAA rainfall dropped implausibly compared with the last trustworthy reading.';
    }
    comparisonWarning = disagreement(mrms, fallback);
    diagnostics = {
      ok: true,
      updatedAt: new Date().toISOString(),
      periods: PERIODS.map(hours => {
        const stats = mrmsStats[hours];
        return {
          hours,
          httpStatus: 200,
          returnedSamples: stats.count,
          count: stats.count,
          rawMin: stats.rawMin,
          rawMax: stats.rawMax,
          median: stats.median,
          average: stats.average,
          min: stats.min,
          max: stats.max,
          durationMs: stats.durationMs,
          raster: stats.raster,
          requestMode: stats.requestMode,
          sampleDetails: hours === 24 ? stats.sampleDetails : undefined
        };
      }),
      comparisonWarning: comparisonWarning
        ? 'Open-Meteo differs substantially; valid NOAA radar remains selected.'
        : undefined
    };

    if (!problem) {
      rainfall = {...mrms, lastRain: mrmsLastRain(mrms, fallback.lastRain || '')};
      rainSource = 'NOAA MRMS radar · distance-weighted 5-mile sampling';
      quality = 'trusted';
      if (comparisonWarning) {
        rainWarning = 'NOAA radar and Open-Meteo differ substantially; valid NOAA radar data is being used. ';
      }
    }
  }

  if (problem || !mrmsStats) {
    rainDataUncertain = true;
    if (cached && meaningful(cached)) {
      rainfall = {...cached, lastRain: mrmsLastRain(cached, cached.lastRain || fallback.lastRain || '')};
      rainSource = 'Last trustworthy NOAA MRMS reading';
      rainWarning = `${problem || 'NOAA radar was unavailable.'} Holding the last trustworthy NOAA reading. `;
      quality = 'fallback';
    } else if (meaningful(fallback) && !orderingInvalid(fallback)) {
      rainfall = fallback;
      rainSource = 'Open-Meteo historical forecast';
      rainWarning = `${problem || 'NOAA radar was unavailable.'} Using Open-Meteo historical precipitation. `;
      quality = 'fallback';
    } else {
      rainfall = fallback;
      rainSource = 'Untrusted precipitation data';
      rainWarning = `${problem || 'Rainfall could not be verified.'} Rideability is unavailable. `;
      quality = 'unavailable';
    }
    diagnostics = {
      ...diagnostics,
      degraded: true,
      degradedReason: problem || mrmsError || 'NOAA radar unavailable',
      safeguardSource: quality === 'unavailable' ? 'No source accepted' : rainSource,
      fallback: {r12: fallback.r12, r24: fallback.r24, r48: fallback.r48, r72: fallback.r72}
    };
  }

  const weather = weatherValues(liveHourly);
  const signals = historicalSignals(historicalHourly || liveHourly);
  const history = stormHistory(trail, rainfall, signals);
  const trailData = trail.data || {};
  const soilProfile = (trailData.soilProfile || {}) as Record<string, unknown>;
  const engineeredDryingFactor = Number(trailData.engineeredDryingFactor) || 1;
  const soilDryingFactor = !/^Low$/i.test(String(soilProfile.confidence || 'Low'))
    ? Number(soilProfile.soilDryingFactor) || 1
    : 1;
  const shadowModel = calculateShadowMoisture({
    trail: {
      ...trailData,
      soilProfile,
      effectiveDrying: soilDryingFactor * engineeredDryingFactor
    },
    historicalHourly: historicalHourly || liveHourly,
    forecastHourly: liveHourly,
    authoritativeRainfall: rainfall,
    rainQuality: quality
  });
  return {
    quality,
    result: {
      schemaVersion: 2,
      observedAt: new Date().toISOString(),
      sourceTimestamp: mrmsStats
        ? new Date(Number(mrmsStats[12].raster.validEndTime)).toISOString()
        : null,
      rain12: rainfall.r12,
      rain24: rainfall.r24,
      rain48: rainfall.r48,
      rain72: rainfall.r72,
      rain24Min: rainfall.r24Min ?? rainfall.r24,
      rain24Max: rainfall.r24Max ?? rainfall.r24,
      rain72Min: rainfall.r72Min ?? rainfall.r72,
      rain72Max: rainfall.r72Max ?? rainfall.r72,
      rainSampleRadius: rainfall.sampleRadius || 0,
      rainSampleCount: rainfall.sampleCount || 1,
      lastRain: quality === 'unavailable' ? 'Uncertain' : rainfall.lastRain,
      lastRainAt: history?.lastRainAt || signals.lastRainAt,
      rain168: signals.rain168,
      maxRain1h: signals.maxRain1h,
      stormHistory: history,
      shadowModel,
      rainSource,
      rainWarning,
      rainDataUncertain,
      rainDiagnostics: diagnostics,
      ...weather
    }
  };
}

async function saveSnapshots(state: string, trails: Trail[], openMeteo: Awaited<ReturnType<typeof fetchOpenMeteoForState>>, products: Record<number, Product>) {
  const observedAt = new Date().toISOString();
  const rows: Record<string, unknown>[] = [];
  for (const group of chunks(trails, NOAA_TRAIL_BATCH)) {
    let mrmsByTrail = new Map<string, Record<number, MrmsStats>>();
    let mrmsError = '';
    try {
      mrmsByTrail = await fetchMrmsBatch(group, products);
    } catch (error) {
      mrmsError = String(error instanceof Error ? error.message : error);
    }
    for (const trail of group) {
      const live = openMeteo.live.get(trail.id);
      const historical = openMeteo.historical.get(trail.id);
      if (!live || !historical) {
        rows.push({
          trail_id: trail.id,
          observed_at: observedAt,
          source_name: 'Unavailable',
          source_timestamp: null,
          data_quality: 'unavailable',
          result: {
            schemaVersion: 1,
            observedAt,
            rainSource: 'Untrusted precipitation data',
            rainWarning: 'Weather data could not be retrieved.',
            rainDataUncertain: true
          },
          diagnostics: {state, error: 'Open-Meteo response missing'}
        });
        continue;
      }
      const built = buildResult(trail, live, historical, mrmsByTrail.get(trail.id), mrmsError);
      const result = built.result as Record<string, unknown>;
      rows.push({
        trail_id: trail.id,
        observed_at: observedAt,
        rain_12: result.rain12,
        rain_24: result.rain24,
        rain_48: result.rain48,
        rain_72: result.rain72,
        temperature_f: result.temperature,
        humidity_percent: result.humidity,
        wind_mph: result.wind,
        source_name: result.rainSource,
        source_timestamp: result.sourceTimestamp,
        data_quality: built.quality,
        result,
        diagnostics: {state, schemaVersion: 1}
      });
    }
  }

  for (const group of chunks(rows, 100)) {
    const response = await rest('trail_weather_snapshots', {
      method: 'POST',
      headers: {'prefer': 'resolution=merge-duplicates,return=minimal'},
      body: JSON.stringify(group)
    });
    if (!response.ok) throw new Error(`Snapshot insert failed: ${await response.text()}`);
  }

  const moistureStates = rows.map(row => {
    const result = row.result as Record<string, unknown>;
    const shadow = result.shadowModel as Record<string, unknown> | undefined;
    if (!shadow) return null;
    return {
      trail_id: row.trail_id,
      model_version: String(shadow.modelVersion || MOISTURE_MODEL_VERSION),
      calculated_at: shadow.calculatedAt,
      surface_moisture: shadow.surfaceMoisture,
      subsurface_saturation: shadow.subsurfaceSaturation,
      wetness_score: shadow.wetnessScore,
      rideability: shadow.rideability,
      status: shadow.status,
      ready_at: shadow.readyAt,
      confidence: shadow.confidence,
      details: shadow
    };
  }).filter(Boolean);
  for (const group of chunks(moistureStates, 100)) {
    const response = await rest('trail_moisture_states?on_conflict=trail_id', {
      method: 'POST',
      headers: {'prefer': 'resolution=merge-duplicates,return=minimal'},
      body: JSON.stringify(group)
    });
    if (!response.ok) throw new Error(`Moisture-state upsert failed: ${await response.text()}`);
  }

  const stormEvents = rows.flatMap(row => {
    const result = row.result as Record<string, unknown>;
    const shadow = result.shadowModel as Record<string, unknown> | undefined;
    const events = Array.isArray(shadow?.eventHistory) ? shadow.eventHistory as Record<string, unknown>[] : [];
    return events.map(event => ({
      trail_id: row.trail_id,
      event_started_at: event.startedAt,
      event_ended_at: event.endedAt,
      total_rain: event.totalRain,
      peak_rain_1h: event.peakRain1h,
      source_name: result.rainSource,
      data_quality: row.data_quality,
      model_version: String(shadow?.modelVersion || MOISTURE_MODEL_VERSION),
      updated_at: observedAt
    }));
  });
  for (const group of chunks(stormEvents, 100)) {
    const response = await rest('trail_storm_events?on_conflict=trail_id,event_started_at', {
      method: 'POST',
      headers: {'prefer': 'resolution=merge-duplicates,return=minimal'},
      body: JSON.stringify(group)
    });
    if (!response.ok) throw new Error(`Storm-event upsert failed: ${await response.text()}`);
  }

  const cutoff = new Date(Date.now() - MOISTURE_HISTORY_DAYS * 24 * 3600000).toISOString();
  const cleanup = await rest(`trail_weather_snapshots?observed_at=lt.${encodeURIComponent(cutoff)}`, {
    method: 'DELETE',
    headers: {'prefer': 'return=minimal'}
  });
  if (!cleanup.ok) throw new Error(`Snapshot cleanup failed: ${await cleanup.text()}`);
  const eventCleanup = await rest(`trail_storm_events?event_ended_at=lt.${encodeURIComponent(cutoff)}`, {
    method: 'DELETE',
    headers: {'prefer': 'return=minimal'}
  });
  if (!eventCleanup.ok) throw new Error(`Storm-event cleanup failed: ${await eventCleanup.text()}`);
  return rows;
}

async function savePreviousSnapshots(state: string, trails: Trail[], reason: string) {
  const observedAt = new Date().toISOString();
  const required = ['rain12', 'rain24', 'rain48', 'rain72', 'humidity', 'wind', 'cloud', 'tempMin', 'temperature'];
  const rows = trails.flatMap(trail => {
    const previous = trail.previous_result;
    const verifiedAt = previous?.weatherLastVerifiedAt ||
      (previous?.weatherRefreshDelayed ? previous?.sourceTimestamp : null) ||
      trail.previous_observed_at;
    const verifiedTime = new Date(String(verifiedAt || 0)).getTime();
    const usable = previous && Number.isFinite(verifiedTime) &&
      Date.now() - verifiedTime <= PREVIOUS_SNAPSHOT_HOLD_MS &&
      required.every(key => Number.isFinite(Number(previous[key])));
    if (!usable || !previous) return [];
    const result = {
      ...previous,
      observedAt,
      rainSource: 'Last verified weather snapshot',
      rainWarning: `Weather refresh delayed. Using the last verified values from ${verifiedAt}.`,
      weatherRefreshDelayed: true,
      weatherLastVerifiedAt: verifiedAt,
      weatherRefreshError: reason
    };
    return [{
      trail_id: trail.id,
      observed_at: observedAt,
      rain_12: result.rain12,
      rain_24: result.rain24,
      rain_48: result.rain48,
      rain_72: result.rain72,
      temperature_f: result.temperature,
      humidity_percent: result.humidity,
      wind_mph: result.wind,
      source_name: result.rainSource,
      source_timestamp: result.sourceTimestamp || null,
      data_quality: trail.previous_quality === 'unavailable' ? 'unavailable' : 'fallback',
      result,
      diagnostics: {state, schemaVersion: 1, fallbackSnapshot: true, reason}
    }];
  });
  for (const group of chunks(rows, 100)) {
    const response = await rest('trail_weather_snapshots', {
      method: 'POST',
      headers: {'prefer': 'resolution=merge-duplicates,return=minimal'},
      body: JSON.stringify(group)
    });
    if (!response.ok) throw new Error(`Fallback snapshot insert failed: ${await response.text()}`);
  }
  return rows;
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') return jsonResponse({error: 'POST required'}, 405);
    if (!SUPABASE_URL || !SERVICE_ROLE_KEY) return jsonResponse({error: 'Server configuration missing'}, 500);
    const token = request.headers.get('x-weather-refresh-token') || '';
    if (!token || !(await verifyToken(token))) return jsonResponse({error: 'Unauthorized'}, 401);

    let state = '';
    try {
      const body = await request.json();
      state = String(body?.state || '').toUpperCase();
      if (!VALID_STATES.has(state)) return jsonResponse({error: 'Unsupported state'}, 400);
      const started = Date.now();
      const trails = await loadTrails(state);
      if (!trails.length) return jsonResponse({state, refreshed: 0, message: 'No active trails'});
      const [products, openMeteo] = await Promise.all([
        fetchProducts(),
        fetchOpenMeteoForState(trails)
      ]);
      const rows = await saveSnapshots(state, trails, openMeteo, products);
      const quality = rows.reduce((counts: Record<string, number>, row) => {
        const key = String(row.data_quality);
        counts[key] = (counts[key] || 0) + 1;
        return counts;
      }, {});
      return jsonResponse({
        state,
        refreshed: rows.length,
        quality,
        mrmsTimestamp: new Date(products[12].validEndTime).toISOString(),
        durationMs: Date.now() - started
      });
    } catch (error) {
      console.error(error);
      const reason = String(error instanceof Error ? error.message : error);
      try {
        if (VALID_STATES.has(state)) {
          const trails = await loadTrails(state);
          const fallbackRows = await savePreviousSnapshots(state, trails, reason);
          if (fallbackRows.length) return jsonResponse({
            state,
            refreshed: fallbackRows.length,
            quality: {fallback: fallbackRows.length},
            delayed: true,
            reason
          });
        }
      } catch (fallbackError) {
        console.error(fallbackError);
      }
      return jsonResponse({error: reason}, 500);
    }
  }
};

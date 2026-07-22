// Manual regression checklist for V38 rainfall safeguards.
// 1. 12 <= 24 <= 48 <= 72 passes.
// 2. Any reversed rolling total is rejected.
// 3. A >45% six-hour drop from a cached storm is rejected.
// 4. A >3x disagreement between NOAA and Open-Meteo is rejected.
// 5. Suspicious NOAA uses a <=24-hour trustworthy cache first.
// 6. With no cache, cautious Open-Meteo fallback is used.
// 7. With neither trustworthy source, rideability is Unavailable, never green.

export function isValidYear(year, min, max) {
  return !isNaN(year) && year >= min && year <= max;
}

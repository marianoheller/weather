const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export function getDayOfTheWeek(ms) {
  const date = new Date(ms);
  return DAYS[date.getDay()];
}

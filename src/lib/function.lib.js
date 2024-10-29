export default function GetYear(date) {
  // date year-month-day
  const year = date.split('-')[0];
  return year;
}

export default function dateParser(isoData, isWeekday) {
  const date = new Date(isoData);
  const dateSchema = {
    year: 'numeric', // Year (e.g., "2023")
    month: 'long', // Full month name (e.g., "November")
    day: 'numeric', // Day of the month (e.g., "1")
  };
  if (isWeekday) {
    dateSchema.weekday = 'long'; // Day of the week (e.g., "Wednesday")
  }
  const formattedDate = date.toLocaleDateString('en-US', dateSchema);
  return formattedDate;
}

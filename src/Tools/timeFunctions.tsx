export function calcDaysToEventDate(eventDate: Date) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const actualDateinMs = Date.now();
  const eventDateinMs = eventDate.getTime();

  return Math.round(Math.abs((eventDateinMs - actualDateinMs) / oneDay));
}

export const getDateFormatDdMmYyyy = (date: Date) => {
  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export function calcDaysToDate(eventDate: Date) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const actualDateinMs = Date.now();
  const eventDateinMs = eventDate.getTime();

  const diffDays = Math.round(
    Math.abs((eventDateinMs - actualDateinMs) / oneDay),
  );

  return diffDays;
}

export const getDateFormatDdMmYyyy = (date: Date) => {
  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

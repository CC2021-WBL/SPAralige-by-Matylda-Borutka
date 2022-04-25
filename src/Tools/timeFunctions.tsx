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

export const getDayName = (date: Date) => {
  return localStorage.getItem('i18nextLng') === 'pl'
    ? date.toLocaleDateString('pl', { weekday: 'long' })
    : date.toLocaleDateString('en', { weekday: 'long' });
};

export function createDateWithHour(date: Date, hour: string) {
  const timeArr = hour.split(':');
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    parseInt(timeArr[0]),
    parseInt(timeArr[1]),
  );
  return newDate;
}

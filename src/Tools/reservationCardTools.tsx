import { calcDaysToEventDate } from './timeFunctions';

export function generateDateProps(date: Date) {
  const days = calcDaysToEventDate(date);
  console.log(days)
  if (days < 0) {
    return {
      chipLabel: 'zrealizowana wizyta',
      styles: {
        backgroundColor: '#E0E0E0',
        color: '#263238',
        marginBottom: '1rem',
      },
    };
  } else if (days === 0) {
    return {
      chipLabel: '1 dzień do zabiegu',
      styles: {
        backgroundColor: '#F1F8E9',
        color: '#33691E',
        marginBottom: '1rem',
      },
    };
  } else if (days === 0 || days > 1) {
    return {
      chipLabel: `${days} dni do zabiegu`,
      styles: {
        backgroundColor: '#F1F8E9',
        color: '#33691E',
        marginBottom: '1rem',
      },
    };
  }
  return {
    chipLabel: `Twój zabieg`,
    styles: {
      backgroundColor: '#F1F8E9',
      color: '#33691E',
      marginBottom: '1rem',
    },
  };
}

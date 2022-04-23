import { QuerySnapshot } from 'firebase/firestore';
import { ReservationCardTypes } from '../Components/Organisms/ReservationCard/ReservationCard';
import { calcDaysToEventDate } from './timeFunctions';

export function generateDateProps(date: Date) {
  const days = calcDaysToEventDate(date);
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

export function createReservationArray(snapshot: QuerySnapshot) {
  const reservationsArr: ReservationCardTypes[] = [];
  snapshot.forEach((reservation) => {
    const reservationData = reservation.data();
    const reservationObj = {
      serviceName: reservationData.serviceName as string,
      serviceDate: reservationData.serviceDate.toDate() as Date,
    };
    reservationsArr.push(reservationObj);
  });
  if (reservationsArr.length === 0) {
    return null;
  }
  return reservationsArr;
}

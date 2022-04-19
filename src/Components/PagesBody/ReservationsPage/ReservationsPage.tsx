import { Box, Tab, Tabs, Typography } from '@mui/material';
import { getDocs, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import TabPanel from '../../Organisms/ReservationCard/TabPanel';
import YourAccountTab from './../../Organisms/YourAccountTab/YourAccountTab';
import ReservationCard, {
  ReservationCardTypes,
} from '../../Organisms/ReservationCard/ReservationCard';
import {
  innerContainerStyle,
  reservationCardsBoxStyle,
  reservationWrapperStyle,
  tabStyle,
} from './ReservationPageStyles';
import { reservationsRef } from '../../../Firebase/firebase';

//mock for userId
const userId = 'Pk1ORdo4QSDzwCet2nT7';

const ReservationsPage = () => {
  const [value, setValue] = useState(0);
  const [reservations, setReservations] = useState<
    ReservationCardTypes[] | null
  >(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const snapshot = await getDocs(
          query(
            reservationsRef,
            where('userId', '==', userId),
            orderBy('serviceDate', 'desc'),
          ),
        );
        if (!snapshot) {
          setReservations(null);
        } else {
          const reservationsArr: ReservationCardTypes[] = [];
          snapshot.forEach((reservation) => {
            const reservationData = reservation.data();
            const reservationObj = {
              serviceName: reservationData.serviceName as string,
              serviceDate: reservationData.serviceDate.toDate() as Date,
            };
            reservationsArr.push(reservationObj);
          });

          setReservations(reservationsArr);
        }
      } catch (error) {
        alert('Oops, coś poszło nie tak, odśwież stronę');
      }
    }

    fetchReservations();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main>
      <Box sx={reservationWrapperStyle}>
        <Box sx={innerContainerStyle}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ height: '3rem' }}
            aria-label="tabs-to-choose"
          >
            <Tab sx={tabStyle} label="REZERWACJE" />
            <Tab sx={tabStyle} label="TWOJE KONTO" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box sx={reservationCardsBoxStyle}>
              {reservations ? (
                reservations.map((reservation, index) => (
                  <ReservationCard
                    key={index}
                    serviceName={reservation.serviceName}
                    serviceDate={reservation.serviceDate}
                  />
                ))
              ) : (
                <Typography>Nie dokonano rezerwacji</Typography>
              )}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <YourAccountTab />
          </TabPanel>
        </Box>
      </Box>
    </main>
  );
};

export default ReservationsPage;

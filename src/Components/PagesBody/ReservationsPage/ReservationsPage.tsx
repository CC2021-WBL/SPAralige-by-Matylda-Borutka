import { Box, LinearProgress, Tab, Tabs, Typography } from '@mui/material';
import { getDocs, orderBy, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import ScrollButton from '../../Atoms/ScrollButton.tsx/ScrollButton';
import Stop from '../../Molecules/Stop/Stop';
import TabPanel from '../../Organisms/ReservationCard/TabPanel';
import YourAccountTab from './../../Organisms/YourAccountTab/YourAccountTab';
import ReservationCard, {
  ReservationCardTypes,
} from '../../Organisms/ReservationCard/ReservationCard';
import { auth, reservationsRef } from '../../../Firebase/firebase';
import { createReservationArray } from '../../../Tools/reservationTools';
import {
  innerContainerStyle,
  reservationCardsBoxStyle,
  reservationWrapperStyle,
  tabStyle,
} from './ReservationPageStyles';

const ReservationsPage = () => {
  const [pending, setIsPending] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [value, setValue] = useState(0);
  const [reservations, setReservations] = useState<
    ReservationCardTypes[] | null
  >(null);

  onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) {
      setUid(null);
    } else if (currentUser.uid !== uid) {
      setUid(currentUser.uid);
    }
  });
  useEffect(() => {
    async function fetchReservations() {
      try {
        const snapshot = await getDocs(
          query(
            reservationsRef,
            where('uid', '==', uid),
            orderBy('serviceDate', 'desc'),
          ),
        );
        const reservationsArr = createReservationArray(snapshot);
        setReservations(reservationsArr);
      } catch (error) {
        console.log(error);
        //alert('Oops, coś poszło nie tak, spróbuj jescze raz');
      }
      setIsPending(false);
    }
    fetchReservations();
  }, [uid]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!uid) {
    return <Stop />;
  }
  return (
    <main>
      <ScrollButton showBelow={250} />
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
              {pending && <LinearProgress />}
              {!pending &&
                reservations &&
                reservations.map((reservation, index) => (
                  <ReservationCard
                    key={index}
                    serviceName={reservation.serviceName}
                    serviceDate={reservation.serviceDate}
                  />
                ))}
              {!pending && !reservations && (
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

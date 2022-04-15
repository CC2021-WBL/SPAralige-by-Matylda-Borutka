/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Box, Tab, Tabs, Typography } from '@mui/material';
import ReservationCard, {
  ReservationCardTypes,
} from '../../Organisms/ReservationCard/ReservationCard';
import {
  createServiceRef,
  reservationsRef,
  servicesRef,
} from '../../../Firebase/firebase';
import { getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import TabPanel from '../../Organisms/ReservationCard/TabPanel';

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
          query(reservationsRef, where('userId', '==', userId)),
        );
        if (!snapshot) {
          setReservations(null);
        } else {
          const reservationsArr: ReservationCardTypes[] = [];
          snapshot.forEach((reservation) => {
            const reservationData = reservation.data();
            const serviceId = reservationData.serviceRef.id;
            // const serviceSnapshot = await getDoc(createServiceRef(serviceId));
            const reservationObj = {
              serviceName: 'Lewatywa z parafiny',
              serviceDate: reservationData.serviceDate.toDate() as Date,
            };
            reservationsArr.push(reservationObj);

            console.log(reservationObj);
          });

          setReservations(reservationsArr);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchReservations();
  }, []);

  console.log(reservations);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box
          sx={{
            width: '20,5rem',
            '@media screen and (min-width: 600px)': {
              width: '35.875rem',
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ height: '3rem' }}
            aria-label="tabs-to-choose"
          >
            <Tab label="REZERWACJE" />
            <Tab label="TWOJE KONTO" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
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
            YOUR ACCOUNT
          </TabPanel>
        </Box>
      </Box>
    </main>
  );
};

export default ReservationsPage;

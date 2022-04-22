import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Modal,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {
  Timestamp,
  addDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import CloseIcon from '../LoginForm/CloseIcon';
import DateButton from './DateButton';
import HourButton from './HourButton';
import {
  FullTimetableType,
  HandleReservationType,
  TimetableType,
} from './BookingModalTypes';
import {
  bookingContainerStyle,
  headerTypographyStyle,
  hourButtonStyle,
  hourButtonTitleStyle,
  hourButtonTypographyStyle,
  modalResTypographyStyle,
  paperStyle,
  stackStyle,
} from './BookingModalStyles';
import { createDateWithHour } from '../../../Tools/timeFunctions';
import {
  createTimetableRef,
  reservationsRef,
  timetablesRef,
} from '../../../Firebase/firebase';
import { hourFromString, sevenDays } from './BookingModalAddons';
import { removeValueFromArray } from '../../../Tools/arrayTools';
import { serviceDataType } from '../../../Types/dbDataTypes';

const BookingModal = (prop: {
  serviceObject: serviceDataType;
  open: boolean;
  handleClose: () => void;
  uid: string | null;
}) => {
  const today = new Date();
  const [chosenDateNumber, setChosenDateNumber] = React.useState(0);
  const [chosenDate, setChosenDate] = React.useState(today);
  const [chosenHourMorning, setChosenHourMorning] = React.useState('');
  const [chosenHourAfternoon, setChosenHourAfternoon] = React.useState('');
  const [chosenHourEvening, setChosenHourEvening] = React.useState('');
  const [chosenTimetable, setChosenTimetable] =
    useState<FullTimetableType | null>(null);
  const [timetablesFromDB, setTimetablesFromDB] = useState<FullTimetableType[]>(
    [],
  );
  const [hoursOfService, sethoursOfService] = React.useState<string[]>([]);
  const [service, setService] = React.useState(prop.serviceObject.name);
  const [price, setPrice] = React.useState(prop.serviceObject.priceInZloty);

  useEffect(() => {
    setService(prop.serviceObject.name);
    setPrice(prop.serviceObject.priceInZloty);
  });

  useEffect(() => {
    async function fetchTimetablesfromDB() {
      const queryRef = query(
        timetablesRef,
        where('serviceId', '==', prop.serviceObject.id),
      );
      const snapshot = await getDocs(queryRef);
      const timetables: FullTimetableType[] = [];

      snapshot.docs.forEach((doc) => {
        const rawTimetable: TimetableType<Timestamp> = {
          ...doc.data(),
          timetableId: doc.id,
        };
        if (rawTimetable.day && rawTimetable.hoursOfService) {
          const timetable: FullTimetableType = {
            day: rawTimetable.day.toDate(),
            hoursOfService: rawTimetable.hoursOfService,
            timetableId: rawTimetable.timetableId,
          };
          timetables.push(timetable);
        }
      });
      setTimetablesFromDB(timetables);
    }

    fetchTimetablesfromDB();
  }, []);

  const handleDayChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number,
  ) => {
    setChosenHourAfternoon('');
    setChosenHourEvening('');
    setChosenHourMorning('');
    setChosenDateNumber(newAlignment);
  };

  const handleHourMorningChange = (
    event: React.MouseEvent<HTMLElement>,
    chosenHour: string,
  ) => {
    setChosenHourAfternoon('');
    setChosenHourEvening('');
    setChosenHourMorning(chosenHour);
  };
  const handleHourAfternoonChange = (
    event: React.MouseEvent<HTMLElement>,
    chosenHour: string,
  ) => {
    setChosenHourMorning('');
    setChosenHourEvening('');
    setChosenHourAfternoon(chosenHour);
  };
  const handleHourEveningChange = (
    event: React.MouseEvent<HTMLElement>,
    chosenHour: string,
  ) => {
    setChosenHourMorning('');
    setChosenHourAfternoon('');
    setChosenHourEvening(chosenHour);
  };

  useEffect(() => {
    setChosenDate(new Date(Date.now() + chosenDateNumber * 3600 * 1000 * 24));
  }, [chosenDateNumber]);

  useEffect(() => {
    if (timetablesFromDB.length > 0) {
      const timetable = timetablesFromDB.find(
        (timeInfo) =>
          timeInfo.day.getFullYear() === chosenDate.getFullYear() &&
          timeInfo.day.getMonth() === chosenDate.getMonth() &&
          timeInfo.day.getDate() === chosenDate.getDate(),
      );
      if (timetable) {
        sethoursOfService(timetable.hoursOfService);
        setChosenTimetable(timetable);
      } else {
        sethoursOfService([]);
        setChosenTimetable(null);
      }
    }
  }, [chosenDate]);

  const handleReservationClicked: HandleReservationType = async (
    event,
    chosenDate,
    chosenHour,
  ) => {
    event.preventDefault();
    if (prop.uid === null) {
      alert('Zaloguj się by kontynuować');
    } else {
      if (chosenHour.length === 0) {
        alert('Wybierz godzinę');
      } else {
        try {
          const docRef = await addDoc(reservationsRef, {
            serviceDate: createDateWithHour(chosenDate, chosenHour),
            serviceName: service,
            serviceRef: prop.serviceObject.id,
            uid: prop.uid,
          });
          if (docRef.id && chosenTimetable) {
            const timetableRef = createTimetableRef(
              chosenTimetable.timetableId,
            );
            const changedArray = removeValueFromArray<string>(
              chosenTimetable.hoursOfService,
              chosenHour,
            );
            await updateDoc(timetableRef, {
              hoursOfService: changedArray,
            });
          }
        } catch (error: any) {
          alert(error.message);
        }
      }
    }
  };

  return (
    <Modal
      open={prop.open}
      onClose={prop.handleClose}
      aria-describedby="booking-modal"
    >
      <Box sx={bookingContainerStyle}>
        <CloseIcon handleClose={prop.handleClose} />
        <Stack spacing={2} sx={stackStyle}>
          <Typography variant="h5" component="h5" sx={headerTypographyStyle}>
            Wybierz datę i godzinę
          </Typography>
          <Typography variant="h6" component="h6">
            {today.toLocaleDateString('pl', {
              month: 'long',
            })}{' '}
            {today.toLocaleDateString('pl', {
              year: 'numeric',
            })}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <ToggleButtonGroup
              color="primary"
              value={chosenDateNumber}
              exclusive
              onChange={handleDayChange}
            >
              {sevenDays.map((item) => (
                <ToggleButton sx={paperStyle} key={item} value={item}>
                  <DateButton
                    dateToday={new Date(Date.now() + item * 3600 * 1000 * 24)}
                  />
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>

          <ToggleButtonGroup
            color="primary"
            value={chosenHourMorning}
            exclusive
            onChange={handleHourMorningChange}
            sx={{ maxWidth: 'calc(100vw - 10px)', alignSelf: 'flex-start' }}
          >
            <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
              <Typography color="black" sx={{ ...hourButtonTypographyStyle }}>
                PORANEK
              </Typography>
            </ToggleButton>
            {hoursOfService
              .filter((item) => hourFromString(item) < 12)
              .map((item, index) => (
                <ToggleButton sx={hourButtonStyle} key={index} value={item}>
                  <HourButton hour={item} />
                </ToggleButton>
              ))}
          </ToggleButtonGroup>

          <ToggleButtonGroup
            color="primary"
            value={chosenHourAfternoon}
            exclusive
            onChange={handleHourAfternoonChange}
            sx={{ alignSelf: 'flex-start' }}
          >
            <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{ ...hourButtonTypographyStyle }}
              >
                POPOPŁUDNIE
              </Typography>
            </ToggleButton>
            {hoursOfService
              .filter(
                (item) =>
                  hourFromString(item) >= 12 && hourFromString(item) < 17,
              )
              .map((item, index) => (
                <ToggleButton sx={hourButtonStyle} key={index} value={item}>
                  <HourButton hour={item} />
                </ToggleButton>
              ))}
          </ToggleButtonGroup>

          <ToggleButtonGroup
            color="primary"
            value={chosenHourEvening}
            exclusive
            onChange={handleHourEveningChange}
            sx={{ alignSelf: 'flex-start' }}
          >
            <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{ ...hourButtonTypographyStyle }}
              >
                WIECZÓR
              </Typography>
            </ToggleButton>
            {hoursOfService
              .filter((item) => hourFromString(item) >= 17)
              .map((item, index) => (
                <ToggleButton sx={hourButtonStyle} key={index} value={item}>
                  <HourButton hour={item} />
                </ToggleButton>
              ))}
          </ToggleButtonGroup>
          <Box
            sx={{
              width: '100%',
              maxWidth: '835px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: 3,
            }}
          >
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              sx={{ padding: '1rem' }}
            >
              <Stack>
                <Typography variant="h5" sx={modalResTypographyStyle}>
                  {service}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="h5"
                  sx={{ ...modalResTypographyStyle, textAlign: 'right' }}
                >
                  {price.toFixed(2)} PLN
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ ...modalResTypographyStyle, textAlign: 'right' }}
                >
                  {chosenDate.toLocaleDateString('pl', {
                    weekday: 'long',
                  })}
                  ,{' '}
                  {chosenDate.toLocaleDateString('pl', {
                    month: '2-digit',
                    day: '2-digit',
                  })}{' '}
                  {chosenHourMorning}
                  {chosenHourAfternoon}
                  {chosenHourEvening}
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Button
            variant="contained"
            size="large"
            sx={{ minWidth: 200, borderRadius: 50 }}
            aria-label="make reservation"
            onClick={(event) => {
              const chosenHour = `${chosenHourMorning}${chosenHourAfternoon}${chosenHourEvening}`;
              handleReservationClicked(event, chosenDate, chosenHour);
            }}
          >
            ZAREZERWUJ
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default BookingModal;

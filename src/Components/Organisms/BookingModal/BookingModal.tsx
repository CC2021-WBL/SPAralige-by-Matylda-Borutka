import {
  Box,
  Typography,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useEffect } from 'react';
import DateButton from './DateButton';

const sevenDays = [0, 1, 2, 3, 4, 5, 6];
const mockService = {
  name: 'Masaż chłopa',
  timetables: [
    {
      day: new Date(2022, 3, 11),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
    {
      day: new Date(2022, 3, 12),
      hoursOfService: [
        '7:30',
        '8:30',
        '9:30',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
      ],
    },
    {
      day: new Date(2022, 3, 13),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
    {
      day: new Date(2022, 3, 14),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
    {
      day: new Date(2022, 3, 15),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
    {
      day: new Date(2022, 3, 16),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
    {
      day: new Date(2022, 3, 17),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
    {
      day: new Date(2022, 3, 18),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
  ],
};

const paperStyle = {
  width: 150,
  height: 215,
  padding: 4,
  margin: 1,
};
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 1168,
  height: '90vh',
  maxHeight: 1012,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

const stackStyle = {
  border: 'none',
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const BookingModal = () => {
  const today = new Date();
  const [chosenDateNumber, setChosenDateNumber] = React.useState(0);
  const [chosenDate, setChosenDate] = React.useState(today);
  const [hoursOfService, sethoursOfService] = React.useState<string[]>([
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
  ]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number,
  ) => {
    setChosenDateNumber(newAlignment);
  };

  useEffect(() => {
    setChosenDate(new Date(Date.now() + chosenDateNumber * 3600 * 1000 * 24));
  }, [chosenDateNumber]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const hoursOfServiceFromMock = mockService.timetables.find(
      (timeInfo) =>
        timeInfo.day.getFullYear() === chosenDate.getFullYear() &&
        timeInfo.day.getMonth() === chosenDate.getMonth() &&
        timeInfo.day.getDate() === chosenDate.getDate(),
    ).hoursOfService;
    console.log(hoursOfServiceFromMock);
    sethoursOfService(hoursOfServiceFromMock);
    console.log(hoursOfService);
  }, [chosenDate]);

  return (
    <Box sx={style}>
      <Stack sx={stackStyle}>
        <Typography variant="h4" component="h4">
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

        <ToggleButtonGroup
          color="primary"
          value={chosenDateNumber}
          exclusive
          onChange={handleChange}
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
    </Box>
  );
};

export default BookingModal;

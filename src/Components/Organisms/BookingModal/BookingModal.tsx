import {
  Box,
  Typography,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useEffect } from 'react';
import DateButton from './DateButton';
import HourButton from './HourButton';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

function hourFromString(hour: string): number {
  return Number(hour.substr(0, hour.indexOf(':')));
}

const sevenDays = [0, 1, 2, 3, 4, 5, 6];
const mockService = {
  name: 'Masaż Gorącymi Kamieniami',
  priceInPLN: 150,
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
      hoursOfService: ['10:00', '11:00', '17:00', '18:00', '19:00'],
    },
    {
      day: new Date(2022, 3, 16),
      hoursOfService: [
        '5:00',
        '6:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
      ],
    },
    {
      day: new Date(2022, 3, 17),
      hoursOfService: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    },
    {
      day: new Date(2022, 3, 18),
      hoursOfService: [
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '19:00',
        '20:00',
        '21:00',
      ],
    },
  ],
};

const paperStyle = {
  width: 150,
  height: 215,
  padding: 4,
  margin: 1,
};
const hourButtonStyle = {
  width: 150,
  height: 32,
  padding: 4,
  margin: 2,
  borderRadius: 4,
};
const hourButtonTitleStyle = {
  width: 150,
  height: 32,
  padding: 4,
  margin: 2,
  borderRadius: 4,
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
  const [chosenHourMorning, setChosenHourMorning] = React.useState('');
  const [chosenHourAfternoon, setChosenHourAfternoon] = React.useState('');
  const [chosenHourEvening, setChosenHourEvening] = React.useState('');
  const [hoursOfService, sethoursOfService] = React.useState<string[]>([
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
  ]);
  const [service, setService] = React.useState(mockService.name);
  const [price, setPrice] = React.useState(mockService.priceInPLN);

  useEffect(() => {
    setService(mockService.name);
    setPrice(mockService.priceInPLN);
  });

  const handleDayChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number,
  ) => {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const hoursOfServiceFromMock = mockService.timetables.find(
      (timeInfo) =>
        timeInfo.day.getFullYear() === chosenDate.getFullYear() &&
        timeInfo.day.getMonth() === chosenDate.getMonth() &&
        timeInfo.day.getDate() === chosenDate.getDate(),
    ).hoursOfService;
    sethoursOfService(hoursOfServiceFromMock);
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

        <ToggleButtonGroup
          color="primary"
          value={chosenHourMorning}
          exclusive
          onChange={handleHourMorningChange}
        >
          <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
            PORANEK
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
        >
          <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
            POPOPŁUDNIE
          </ToggleButton>
          {hoursOfService
            .filter(
              (item) => hourFromString(item) >= 12 && hourFromString(item) < 17,
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
        >
          <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
            WIECZÓR
          </ToggleButton>
          {hoursOfService
            .filter((item) => hourFromString(item) >= 17)
            .map((item, index) => (
              <ToggleButton sx={hourButtonStyle} key={index} value={item}>
                <HourButton hour={item} />
              </ToggleButton>
            ))}
        </ToggleButtonGroup>

        <Card sx={{ width: '100%' }}>
          <Stack>
            <Typography variant="h4">{service}</Typography>
            <Typography variant="h4">{price} PLN</Typography>
            <Typography variant="h5">
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
        </Card>

        <Button
          variant="contained"
          onClick={() => {
            console.log({
              service,
              price,
              chosenDate,
              chosenHourMorning,
              chosenHourAfternoon,
              chosenHourEvening,
            });
          }}
        >
          ZAREZERWUJ
        </Button>
      </Stack>
    </Box>
  );
};

export default BookingModal;

import {
  Box,
  Typography,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
} from '@mui/material';
import React, { useEffect } from 'react';
import DateButton from './DateButton';
import HourButton from './HourButton';
import Button from '@mui/material/Button';
import CloseIcon from '../LoginForm/CloseIcon';
import {
  hourButtonStyle,
  hourButtonTitleStyle,
  paperStyle,
  stackStyle,
  style,
} from './BookingModalStyles';
import { serviceDataType } from '../../../Types/dbDataTypes';
import { hourFromString, sevenDays } from './BookingModalAddons';
import { mockService } from './MockService';

const BookingModal = (prop: {
  serviceObject: serviceDataType;
  open: boolean;
  handleClose: () => void;
}) => {
  console.log(prop.serviceObject);
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
  const [service, setService] = React.useState(prop.serviceObject.name);
  const [price, setPrice] = React.useState(prop.serviceObject.priceInZloty);

  useEffect(() => {
    setService(prop.serviceObject.name);
    setPrice(prop.serviceObject.priceInZloty);
  });

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
    <Modal
      open={prop.open}
      onClose={prop.handleClose}
      aria-describedby="booking-modal"
    >
      <Box sx={style}>
        <CloseIcon handleClose={prop.handleClose} />
        <Stack spacing={2} sx={stackStyle}>
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
          >
            <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
              <Typography variant="subtitle1" color="black">
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
          >
            <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
              <Typography variant="subtitle1" color="black">
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
          >
            <ToggleButton value={'LOL'} disabled sx={hourButtonTitleStyle}>
              <Typography variant="subtitle1" color="black">
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
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: '1rem',
            }}
          >
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              sx={{ padding: '1rem' }}
            >
              <Stack>
                <Typography variant="h4">{service}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h4">{price.toFixed(2)} PLN</Typography>
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
            </Stack>
          </Box>

          <Button
            variant="contained"
            size="large"
            sx={{ minWidth: 200, height: 50, borderRadius: 50 }}
            aria-label="make reservation"
            onClick={() => {
              console.log({
                service,
                price,
                chosenDate,
                chosenHour: `${chosenHourMorning}${chosenHourAfternoon}${chosenHourEvening}`,
              });
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
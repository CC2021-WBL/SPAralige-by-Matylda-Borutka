import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

interface DateButtonProps {
  dateToday: Date;
}

const dayStyle = {
  color: '#424242',
  fontSize: '0.6rem',
  '@media screen and (min-width: 600px)': {
    fontSize: '0.9rem',
  },
  '@media screen and (min-width: 970px)': {
    fontSize: '1rem',
  },
};

const dateStyle = {
  color: '#424242',
  fontSize: '1rem',
  '@media screen and (min-width: 600px)': {
    fontSize: '1.6rem',
  },
  '@media screen and (min-width: 970px)': {
    fontSize: '2rem',
  },
};

const DateButton = (props: DateButtonProps) => {
  return (
    <Stack>
      <Typography sx={dayStyle}>
        {localStorage.getItem('i18nextLng') === 'pl'
          ? props.dateToday.toLocaleDateString('pl', {
              weekday: 'short',
            })
          : props.dateToday.toLocaleDateString('en', {
              weekday: 'short',
            })}
      </Typography>
      <Typography sx={dateStyle}>
        {props.dateToday.toLocaleDateString('pl', {
          month: '2-digit',
          day: '2-digit',
        })}
      </Typography>
    </Stack>
  );
};

DateButton.propTypes = {
  dateToday: PropTypes.instanceOf(Date),
};
export default DateButton;

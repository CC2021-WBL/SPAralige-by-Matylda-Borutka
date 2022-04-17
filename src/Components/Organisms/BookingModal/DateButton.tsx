import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface DateButtonProps {
  dateToday: Date;
}

const dayStyle = {
  fontSize: '0.6rem',
  '@media screen and (min-width: 600px)': {
    fontSize: '0.9rem',
  },
  '@media screen and (min-width: 970px)': {
    fontSize: '1rem',
  },
};

const dateStyle = {
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
      <Typography variant="h6" sx={dayStyle}>
        {props.dateToday.toLocaleDateString('pl', {
          weekday: 'short',
        })}
      </Typography>
      <Typography variant="h4" sx={dateStyle}>
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

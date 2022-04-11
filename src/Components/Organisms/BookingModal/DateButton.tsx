import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface DateButtonProps {
  dateToday: Date;
}

const DateButton = (props: DateButtonProps) => {
  return (
    <Stack>
      <Typography variant="h6">
        {props.dateToday.toLocaleDateString('pl', {
          weekday: 'long',
        })}
      </Typography>
      <Typography variant="h4">
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

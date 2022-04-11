import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface HourButtonProps {
  hour: string;
}

const HourButton = (props: HourButtonProps) => {
  return (
    <Stack>
      <Typography variant="h6">{props.hour}</Typography>
    </Stack>
  );
};

HourButton.propTypes = {
  hour: PropTypes.string,
};
export default HourButton;

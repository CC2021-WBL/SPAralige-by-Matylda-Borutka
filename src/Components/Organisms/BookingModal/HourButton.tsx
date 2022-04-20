import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

import { hourButtonTypographyStyle } from './BookingModalStyles';

interface HourButtonProps {
  hour: string;
}

const HourButton = (props: HourButtonProps) => {
  return (
    <Stack>
      <Typography variant="h6" sx={hourButtonTypographyStyle} color="#424242">
        {props.hour}
      </Typography>
    </Stack>
  );
};

HourButton.propTypes = {
  hour: PropTypes.string,
};
export default HourButton;

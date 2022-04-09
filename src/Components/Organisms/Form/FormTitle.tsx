import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function FormTitle({ text1, text2 }) {
  return (
    <Box
      sx={{
        height: '4.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        sx={{
          height: '2rem',
          fontSize: '1.4375rem',
        }}
        variant="h5"
      >
        {text1}
      </Typography>
      <Typography
        sx={{
          height: '1.313rem',
          fontSize: '15px',
        }}
        variant="subtitle1"
      >
        {text2}
      </Typography>
    </Box>
  );
}

FormTitle.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
};

export default FormTitle;

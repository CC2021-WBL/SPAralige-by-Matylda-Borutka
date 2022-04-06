import { Box, Typography } from '@mui/material';

export default function LoginTitle() {
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
        Welcome to Sparalige!
      </Typography>
      <Typography
        sx={{
          height: '1.313rem',
          fontSize: '15px',
        }}
        variant="subtitle1"
      >
        Login with email and password
      </Typography>
    </Box>
  );
}

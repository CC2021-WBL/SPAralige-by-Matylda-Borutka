/* eslint-disable react/prop-types */

import { Box, Button, Stack, Typography } from '@mui/material';

import errorImg from '../../../Assets/error.png';

function ErrorFallback() {
  return (
    <div role="alert">
      <Stack
        alignItems="center"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          component="img"
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.18)',
            borderRadius: '10.625rem',
            height: '18.75rem',
            width: '20rem',
            maxHeight: { xs: 233, md: 230 },
          }}
          alt="surprised womaen with head towel"
          src={errorImg}
        />
        <Typography
          variant="h5"
          align="center"
          sx={{ padding: '2.5rem 0', width: '15.1875rem' }}
        >
          Przepraszamy!<p>Nie znaleźliśmy strony, której szukasz.</p>
        </Typography>
        <Button
          disableElevation
          variant="contained"
          href="/"
          aria-label="landing page"
        >
          Wróć Do Strony Głównej
        </Button>
      </Stack>
    </div>
  );
}

export default ErrorFallback;

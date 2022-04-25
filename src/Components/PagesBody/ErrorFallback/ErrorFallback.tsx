/* eslint-disable react/prop-types */

import { Box, Button, Stack, Typography } from '@mui/material';

import errorImg from '../../../Assets/error.png';

function ErrorFallback() {
  return (
    <div role="alert">
      <Stack
        alignItems="center"
        sx={{
          padding: { xs: '2.5rem', lg: '3.75rem' },
        }}
      >
        <Box
          component="img"
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.18)',
            borderRadius: '10.625rem',
            height: { xs: '13.75rem', sm: '18.75rem' },
            width: { xs: '20rem', sm: '20rem' },
            maxHeight: { xs: 233, sm: 230 },
          }}
          alt="surprised woman with head towel"
          src={errorImg}
        />
        <Typography
          variant="h6"
          align="center"
          sx={{ padding: '2.5rem 0', width: '15.1875rem' }}
        >
          Przepraszamy!<p>Coś poszło nie tak.</p>
        </Typography>
        <Button
          disableElevation
          variant="contained"
          onClick={() => window.location.reload()}
          aria-label="refresh"
        >
          Kliknij aby odświeżyć
        </Button>
      </Stack>
    </div>
  );
}

export default ErrorFallback;

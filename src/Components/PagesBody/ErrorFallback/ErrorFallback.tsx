/* eslint-disable react/prop-types */

import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import errorImg from '../../../Assets/error.png';

function ErrorFallback() {
  const { t } = useTranslation('other');
  return (
    <div role="alert">
      <Stack
        alignItems="center"
        sx={{
          padding: { xs: '1.25rem', md: '2.5rem', lg: '3.75rem' },
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
          {t('error.heading1')}
          <p>{t('error.heading2')}</p>
        </Typography>
        <Button
          disableElevation
          variant="contained"
          href="/"
          aria-label="landing page"
        >
          {t('error.back')}
        </Button>
      </Stack>
    </div>
  );
}

export default ErrorFallback;

import { Link, Stack, Typography } from '@mui/material';

import { SignOrResetPropType } from './LoginTypes';

function SignOrResetLink(prop: SignOrResetPropType) {
  return (
    <Stack direction="row" justifyContent={'center'} spacing={0.5}>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: '0.9375rem',
          letterSpacing: '0.15px',
        }}
      >
        {prop.issueText}
      </Typography>
      <Link
        role="link"
        aria-label={`link to ${prop.linkText}`}
        underline="none"
        sx={{ cursor: 'pointer' }}
        tabIndex={0}
      >
        {prop.linkText}
      </Link>
    </Stack>
  );
}

export default SignOrResetLink;

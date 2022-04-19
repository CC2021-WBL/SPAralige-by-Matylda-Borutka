import { Button, Stack, Typography } from '@mui/material';

import { SignOrResetPropType } from './LoginTypes';

function SignOrResetLink(prop: SignOrResetPropType) {
  return (
    <Stack direction="row" justifyContent={'center'} spacing={0.5}>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: '0.9375rem',
          letterSpacing: '0.15px',
          paddingTop: '0.375rem',
        }}
      >
        {prop.issueText}
      </Typography>
      <Button
        variant="text"
        aria-label={`send to ${prop.linkText}`}
        sx={{
          cursor: 'pointer',
        }}
        tabIndex={0}
        onClick={prop.handleOnClick}
      >
        {prop.linkText}
      </Button>
    </Stack>
  );
}

export default SignOrResetLink;

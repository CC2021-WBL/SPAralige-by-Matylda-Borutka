import { Stack, TextField } from '@mui/material';

import { LoginInputsProps } from './LoginTypes';

export default function EmailAndPasswordInput(loginProps: LoginInputsProps) {
  return (
    <Stack spacing={'1.4375rem'}>
      <TextField
        label="Email"
        type={'email'}
        aria-label="Input for email to sign in"
        value={loginProps.email}
        onChange={loginProps.handleEmailChange}
        sx={{
          height: '3.5rem',
        }}
      ></TextField>
      <TextField
        label="Hasło"
        type={'password'}
        aria-label="Input for password to sign in"
        value={loginProps.password}
        onChange={loginProps.handlePasswordChange}
        sx={{
          height: '3.5rem',
        }}
      ></TextField>
    </Stack>
  );
}

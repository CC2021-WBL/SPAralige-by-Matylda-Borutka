import { Stack, TextField } from '@mui/material';

import { LoginInputsProps } from './LoginTypes';

export default function EmailAndPasswordInput(props: LoginInputsProps) {
  return (
    <Stack spacing={'1.4375rem'}>
      <TextField
        label="Email"
        type={'email'}
        aria-label="Input for email to sign in"
        value={props.email}
        onChange={props.handleEmailChange}
        sx={{
          height: '3.5rem',
        }}
        InputLabelProps={{
          sx: {
            paddingTop: '1px',
          },
        }}
      ></TextField>
      <TextField
        label="Hasło"
        type={'password'}
        aria-label="Input for password to sign in"
        value={props.password}
        onChange={props.handlePasswordChange}
        sx={{
          height: '3.5rem',
        }}
        InputLabelProps={{
          sx: {
            paddingTop: '1px',
          },
        }}
      ></TextField>
    </Stack>
  );
}

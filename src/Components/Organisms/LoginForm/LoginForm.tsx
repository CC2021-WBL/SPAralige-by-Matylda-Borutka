import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  return (
    <>
      <Typography variant="h5">Welcome to Sparalige!</Typography>
      <Typography variant="subtitle1">Login with email and password</Typography>
      <Stack spacing={2}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField label="Password"></TextField>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Stack>
    </>
  );
}

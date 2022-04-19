import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import BuggyCounter from './ErrorTest';
import LoginModal from '../Organisms/LoginForm/LoginModal';

export default function TestingBody() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack>
      <Button onClick={handleOpen} variant="contained" sx={{ width: 200 }}>
        Open modal
      </Button>
      <LoginModal open={open} handleClose={handleClose} />
      <BuggyCounter />
    </Stack>
  );
}

import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import LoginModal from '../Organisms/LoginForm/LoginModal';
import RegisterPage from './RegisterPage/RegisterPage';

export default function TestingBody() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleOpenRegisterModal = () => {
    setOpenRegisterModal(true);
  };
  const handleCloseRegisterModal = () => {
    setOpenRegisterModal(false);
  };

  return (
    <Stack>
      <Button
        onClick={handleOpenLoginModal}
        variant="contained"
        sx={{ width: 200 }}
      >
        Open login modal
      </Button>
      <Button
        onClick={handleOpenRegisterModal}
        variant="contained"
        sx={{ width: 200 }}
      >
        Open register modal
      </Button>
      <LoginModal open={openLoginModal} handleClose={handleCloseLoginModal} />
      <RegisterPage
        open={openRegisterModal}
        handleClose={handleCloseRegisterModal}
      />
    </Stack>
  );
}

import { Box, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import ClosingIcon from './CloseIcon';
import EmailAndPasswordInput from './EmailAndPasswordInput';
import FacebookAndGoogleBox from './FacebookAndGoogleBox';
import LoginButton from './LoginButton';
import LoginTitle from './LoginTitle';
import SignOrResetLink from './SignOrResetLink';
import { HandleInputChangeType } from '../../../Types/EventFunctions';

export default function LoginModal(prop: {
  open: boolean;
  handleClose: () => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange: HandleInputChangeType = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange: HandleInputChangeType = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <Modal
      open={prop.open}
      onClose={prop.handleClose}
      aria-describedby="modal-modal-signin-by-email-facebook-or-google"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#FFFFFF',
          width: '31.25rem',
          height: '40.813rem',
          padding: ['2.5rem', '2.125rem'],
          '@media screen and (max-width: 600px)': {
            width: '19.625rem',
            padding: ['2.5rem', '2.125rem'],
          },
        }}
      >
        <Stack spacing={'1.4375rem'}>
          <ClosingIcon handleClose={prop.handleClose} />
          <LoginTitle aria-label="Sign in to SPAralige" />
          <EmailAndPasswordInput
            email={email}
            password={password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
          />
          <LoginButton email={email} password={password} />
          <Typography
            variant="body1"
            sx={{
              color: '#9E9E9E',
              fontSize: '1rem',
              aligItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.5px',
            }}
          >
            lub
            <FacebookAndGoogleBox />
          </Typography>
          <SignOrResetLink
            issueText="Nie masz konta? "
            linkText="Zarejestruj się"
          />
          <SignOrResetLink
            issueText="Zapomniałeś hasła? "
            linkText="Zresetuj hasło"
          />
        </Stack>
      </Box>
    </Modal>
  );
}

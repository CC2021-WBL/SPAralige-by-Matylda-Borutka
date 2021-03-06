import { Box, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import ClosingIcon from './CloseIcon';
import EmailAndPasswordInput from './EmailAndPasswordInput';
import FacebookAndGoogleBox from '../../Molecules/FacebookAndGoogleBox/FacebookAndGoogleBox';
import FormTitle from '../Form/FormTitle';
import LoginButton from './LoginButton';
import SignOrResetLink from './SignOrResetLink';
import { AuthModalPropTypes } from '../../../Types/loginOrRegisterTypes';
import { HandleInputChangeType } from '../../../Types/EventFunctions';

export default function LoginModal(prop: AuthModalPropTypes) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange: HandleInputChangeType = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
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
          height: 'fit-content',
          maxHeight: '100vh',
          overflow: 'auto',
          padding: ['2.5rem', '2.125rem'],
          '@media screen and (max-width: 600px)': {
            width: '100%',
            padding: ['.8rem 1.5rem', '1.5rem'],
          },
        }}
      >
        <Stack spacing={{ xs: '1rem', sm: '1.25rem' }}>
          <ClosingIcon handleClose={prop.handleClose} />
          <FormTitle
            aria-label="Sign in to SPAralige"
            text1="Witamy w SPAralige!"
            text2="Zaloguj się wpisując login i hasło"
          />
          <EmailAndPasswordInput
            email={email}
            password={password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
          />
          <LoginButton
            email={email}
            password={password}
            handleClose={prop.handleClose}
          />
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
          </Typography>
          <FacebookAndGoogleBox
            loginOrRegisterOptions="login"
            handleClose={prop.handleClose}
          />
          <SignOrResetLink
            issueText="Nie masz konta? "
            linkText="Zarejestruj się"
            handleOnClick={prop.handleLoginOrRegisterTransfer}
          />
          <SignOrResetLink
            issueText="Zapomniałeś hasła? "
            linkText="Zresetuj hasło"
            handleOnClick={prop.handleFrogetPasswordTransfer}
          />
        </Stack>
      </Box>
    </Modal>
  );
}

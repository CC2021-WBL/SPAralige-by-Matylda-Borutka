import { Box, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('loginModal');
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
          maxHeight: '98vh',
          overflow: 'auto',
          padding: ['2.5rem', '2.125rem'],
          '@media screen and (max-width: 600px)': {
            width: '19.625rem',
            padding: ['2.5rem', '2.125rem'],
          },
        }}
      >
        <Stack spacing={{ xs: '1rem', sm: '1.25rem' }}>
          <ClosingIcon handleClose={prop.handleClose} />
          <FormTitle
            aria-label="Sign in to SPAralige"
            text1={`${t('welcome')} SPAralige!`}
            text2={`${t('heading')}`}
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
            {t('or')}
          </Typography>
          <FacebookAndGoogleBox loginOrRegister="login" />
          <SignOrResetLink
            issueText={t('account')}
            linkText={t('register')}
            handleOnClick={prop.handleLoginOrRegisterTransfer}
          />
          <SignOrResetLink
            issueText={t('forgot')}
            linkText={t('reset')}
            handleOnClick={prop.handleFrogetPasswordTransfer}
          />
        </Stack>
      </Box>
    </Modal>
  );
}

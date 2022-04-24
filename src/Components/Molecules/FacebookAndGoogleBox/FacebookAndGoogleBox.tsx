import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { loginOrRegisterOptions } from '../../../Types/loginOrRegisterTypes';
import { loginWithFacebook } from '../../../Firebase/facebookLogin';
import { loginWithGoogle } from '../../../Firebase/googleLogin';

function FacebookAndGoogleBox({ loginOrRegister }: loginOrRegisterOptions) {
  const onGoogleClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithGoogle();
  };
  const onFbClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithFacebook();
  };
  const { t } = useTranslation('loginModal');
  return (
    <Stack spacing={'0.6875rem'}>
      <Button
        variant="contained"
        disableElevation={true}
        aria-label="sig in with facebook"
        sx={{ height: '2.9375rem', background: '#01579B' }}
        onClick={onFbClick}
      >
        {loginOrRegister === 'register' && t('register')}
        {loginOrRegister === 'login' && t('login')} {t('login2')}
      </Button>
      <Button
        variant="contained"
        disableElevation={true}
        aria-label="sig in with google"
        sx={{
          height: '2.9375rem',
          background: '#FB8C00',
          '&:hover': { background: '#FFA500' },
        }}
        onClick={onGoogleClick}
      >
        {loginOrRegister === 'register' && t('register')}
        {loginOrRegister === 'login' && t('login')} {t('login3')}
      </Button>
    </Stack>
  );
}

export default FacebookAndGoogleBox;

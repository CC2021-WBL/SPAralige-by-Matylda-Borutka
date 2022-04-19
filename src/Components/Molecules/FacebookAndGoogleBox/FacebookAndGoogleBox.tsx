import { Button, Stack } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { loginWithFacebook } from '../../../Firebase/facebookLogin';
import { loginWithGoogle } from '../../../Firebase/googleLogin';
import {
  LOGIN_REGISTER,
  loginOrRegisterOptions,
} from '../../../Types/loginOrRegisterTypes';

function FacebookAndGoogleBox({ loginOrRegister }: loginOrRegisterOptions) {
  const onGoogleClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithGoogle();
  };
  const onFbClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithFacebook();
  };

  return (
    <Stack spacing={'0.6875rem'}>
      <Button
        variant="contained"
        disableElevation={true}
        aria-label="sig in with facebook"
        sx={{ height: '2.9375rem', background: '#01579B' }}
        onClick={onFbClick}
      >
        {loginOrRegister === LOGIN_REGISTER.REGISTER && 'ZAREJESTRUJ'}
        {loginOrRegister === LOGIN_REGISTER.LOGIN && 'ZALOGUJ'} SIĘ PRZEZ
        FACEBOOK&#39;A
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
        {loginOrRegister === LOGIN_REGISTER.REGISTER && 'ZAREJESTRUJ'}
        {loginOrRegister === LOGIN_REGISTER.LOGIN && 'ZALOGUJ'} SIĘ PRZEZ KONTO
        GOOGLE
      </Button>
    </Stack>
  );
}

export default FacebookAndGoogleBox;

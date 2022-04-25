import { Button, Stack } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { loginWithFacebook } from '../../../Firebase/facebookLogin';
import { loginWithGoogle } from '../../../Firebase/googleLogin';

function FacebookAndGoogleBox(prop: {
  loginOrRegisterOptions: string;
  handleClose: () => void;
}) {
  const onGoogleClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithGoogle();
    prop.handleClose();
  };
  const onFbClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithFacebook();
    prop.handleClose();
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
        {prop.loginOrRegisterOptions === 'register' && 'ZAREJESTRUJ'}
        {prop.loginOrRegisterOptions === 'login' && 'ZALOGUJ'} SIĘ PRZEZ
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
        {prop.loginOrRegisterOptions === 'register' && 'ZAREJESTRUJ'}
        {prop.loginOrRegisterOptions === 'login' && 'ZALOGUJ'} SIĘ PRZEZ GOOGLE
      </Button>
    </Stack>
  );
}

export default FacebookAndGoogleBox;

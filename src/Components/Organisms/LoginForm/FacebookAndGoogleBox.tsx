import { Button, Stack, Typography } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { loginWithFacebook } from '../../../Firebase/facebookLogin';
import { loginWithGoogle } from '../../../Firebase/googleLogin';
import PropTypes from 'prop-types';

function FacebookAndGoogleBox({ loginOrRegister }) {
  const onGoogleClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithGoogle();
  };
  const onFbClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    await loginWithFacebook();
  };

  return (
    <Stack spacing={1.5}>
      <Button
        variant="contained"
        disableElevation={true}
        aria-label="sig in with facebook"
        sx={{ height: '2.9375rem', background: '#01579B' }}
        onClick={onFbClick}
      >
        <Typography sx={{ fontSize: '0.875rem', paddingTop: '1px' }}>
          {loginOrRegister === 'register' ? 'ZAREJESTRUJ' : 'ZALOGUJ'} SIĘ PRZEZ
          FACEBOOK&#39;A
        </Typography>
      </Button>
      <Button
        variant="contained"
        disableElevation={true}
        aria-label="sign in with google"
        sx={{
          height: '2.9375rem',
          background: '#FB8C00',
          '&:hover': { background: '#FFA500' },
        }}
        onClick={onGoogleClick}
      >
        <Typography sx={{ paddingTop: '1px' }}>
          {' '}
          {loginOrRegister === 'register' ? 'ZAREJESTRUJ' : 'ZALOGUJ'} SIĘ PRZEZ
          KONTO GOOGLE
        </Typography>
      </Button>
    </Stack>
  );
}

FacebookAndGoogleBox.propTypes = {
  loginOrRegister: PropTypes.string,
};

export default FacebookAndGoogleBox;

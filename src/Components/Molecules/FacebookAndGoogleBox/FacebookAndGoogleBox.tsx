import { Button, Stack } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { loginWithFacebook } from '../../../Firebase/facebookLogin';
import { loginWithGoogle } from '../../../Firebase/googleLogin';

function FacebookAndGoogleBox() {
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
        sx={{ height: '2.9375rem', background: '#01579B' }}
        onClick={onFbClick}
      >
        CONTINUE WITH FACEBOOK
      </Button>
      <Button
        variant="contained"
        sx={{
          height: '2.9375rem',
          background: '#FB8C00',
          '&:hover': { background: '#FFA500' },
        }}
        onClick={onGoogleClick}
      >
        CONTINUE WITH GOOGLE
      </Button>
    </Stack>
  );
}

export default FacebookAndGoogleBox;

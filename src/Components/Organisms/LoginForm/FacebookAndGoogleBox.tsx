import { Button, Stack, Typography } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { loginWithFacebook } from '../../../Firebase/firebase';
import { loginWithGoogle } from '../../../Firebase/firebase';

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
    <Stack spacing={1.5}>
      <Button
        variant="contained"
        disableElevation={true}
        aria-label="sig in with facebook"
        sx={{ height: '2.9375rem', background: '#01579B' }}
        onClick={onFbClick}
      >
        <Typography sx={{ fontSize: '0.875rem', paddingTop: '1px' }}>
          ZALOGUJ PRZEZ FACEBOOK&apos;A
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
        <Typography sx={{ paddingTop: '1px' }}>ZALOGUJ PRZEZ GOOGLE</Typography>
      </Button>
    </Stack>
  );
}

export default FacebookAndGoogleBox;

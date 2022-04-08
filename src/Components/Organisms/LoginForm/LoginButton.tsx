import { Button, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { auth } from '../../../Firebase/firebase';

function LoginButton(prop: { email: string; password: string }) {
  const handleLoginClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    try {
      const userCredentialObj = await signInWithEmailAndPassword(
        auth,
        prop.email,
        prop.password,
      );
      console.log(userCredentialObj.user);
    } catch (error: any) {
      console.log(error.code);
      console.log(error.message);
    }
  };
  return (
    <Button
      variant="contained"
      disableElevation={true}
      aria-label="accept email and password to sign in"
      color="primary"
      sx={{
        height: '2.9375rem',
      }}
      onClick={handleLoginClick}
    >
      <Typography sx={{ paddingTop: '1px' }}>ZALOGUJ</Typography>
    </Button>
  );
}

export default LoginButton;

import { Button } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';

import {
  HandleKeyboardClick,
  HandleOnClickButtonType,
} from '../../../Types/EventFunctions';
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
      type="button"
      variant="contained"
      color="primary"
      sx={{ height: '2.9375rem' }}
      onClick={handleLoginClick}
    >
      LOGIN
    </Button>
  );
}

export default LoginButton;

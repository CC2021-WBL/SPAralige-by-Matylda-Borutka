import { Button, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { auth } from '../../../Firebase/firebase';

function LoginButton(prop: {
  email: string;
  password: string;
  handleClose: () => void;
}) {
  const handleLoginClick: HandleOnClickButtonType = async (event) => {
    event.preventDefault();
    try {
      const userCredentialObj = await signInWithEmailAndPassword(
        auth,
        prop.email,
        prop.password,
      );
      if (userCredentialObj) {
        prop.handleClose();
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  const { t } = useTranslation('loginModal');
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
      <Typography sx={{ paddingTop: '1px' }}>{t('login')}</Typography>
    </Button>
  );
}

export default LoginButton;

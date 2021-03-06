import * as Yup from 'yup';
import {
  Box,
  Button,
  LinearProgress,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { CheckboxWithLabel, TextField } from 'formik-mui';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import ClosingIcon from '../LoginForm/CloseIcon';
import FacebookAndGoogleBox from '../../Molecules/FacebookAndGoogleBox/FacebookAndGoogleBox';
import FormTitle from '../Form/FormTitle';
import SignOrResetLink from '../LoginForm/SignOrResetLink';
import { AuthModalPropTypes } from '../../../Types/loginOrRegisterTypes';
import { auth } from '../../../Firebase/firebase';

const RegisterValidation = Yup.object().shape({
  email: Yup.string()
    .required('Adres e-mail wymagany')
    .email('Niepoprawny adres e-mail'),
  password: Yup.string()
    .min(6, 'Hasło musi składać się z conajmniej 6 znaków')
    .required('Hasło jest wymagane'),
  confirmPassword: Yup.string()
    .required('Wpisz hasło')
    .oneOf([Yup.ref('password')], 'Podane hasła różnią się'),
  termsOfService: Yup.boolean()
    .required('* Warunki użytkowania muszę zostać zaakceptowane.')
    .oneOf([true], '* Warunki użytkowania muszę zostać zaakceptowane.'),
});

const RegisterModal = (prop: AuthModalPropTypes) => {
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
          height: 'fit-content',
          maxHeight: '100vh',
          overflow: 'auto',
          padding: ['2.5rem', '2.125rem'],
          '@media screen and (max-width: 600px)': {
            width: '100%',
            padding: ['.8rem 1.5rem', '1.5rem'],
          },
        }}
      >
        <ClosingIcon handleClose={prop.handleClose} />
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            termsOfService: false,
          }}
          validationSchema={RegisterValidation}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            try {
              const credentialObj = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password,
              );
              if (credentialObj) {
                alert('Rejestracja udana');
              }
              prop.handleClose();
            } catch (error: any) {
              alert(error.message);
            }
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Stack spacing={'1.4375rem'}>
                <FormTitle
                  aria-label="Sign in to SPAralige"
                  text1="Witamy w SPAralige!"
                  text2="Uzupełnij formularz aby założyć konto."
                />
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                />
                <Field
                  component={TextField}
                  type="password"
                  label="Hasło"
                  name="password"
                />
                <Field
                  component={TextField}
                  type="password"
                  label="Powtórz hasło"
                  name="confirmPassword"
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="termsOfService"
                  Label={{
                    label: 'Wyrażam zgodę na warunki korzystania z serwisu',
                  }}
                />
                <ErrorMessage
                  name="termsOfService"
                  component="div"
                  className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"
                />
                {isSubmitting && <LinearProgress />}
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  sx={{ height: '2.9375rem' }}
                >
                  Zarejestruj się
                </Button>
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
                  lub
                </Typography>
                <FacebookAndGoogleBox
                  loginOrRegisterOptions="register"
                  handleClose={prop.handleClose}
                />
                <SignOrResetLink
                  issueText="Masz już konto?"
                  linkText="Zaloguj się"
                  handleOnClick={prop.handleLoginOrRegisterTransfer}
                />
                <SignOrResetLink
                  issueText="Zapomniałeś hasła? "
                  linkText="Zresetuj hasło"
                  handleOnClick={prop.handleFrogetPasswordTransfer}
                />
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default RegisterModal;

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
import { useTranslation } from 'react-i18next';

import ClosingIcon from '../LoginForm/CloseIcon';
import FacebookAndGoogleBox from '../../Molecules/FacebookAndGoogleBox/FacebookAndGoogleBox';
import FormTitle from '../Form/FormTitle';
import SignOrResetLink from '../LoginForm/SignOrResetLink';
import { AuthModalPropTypes } from '../../../Types/loginOrRegisterTypes';
import { auth } from '../../../Firebase/firebase';

const RegisterModal = (prop: AuthModalPropTypes) => {
  const { t } = useTranslation('registerModal');
  const RegisterValidation = Yup.object().shape({
    email: Yup.string().required(t('requiredEmail')).email(t('wrongEmail')),
    password: Yup.string().min(6, t('passwordYup')).required(t('passwordYup2')),
    confirmPassword: Yup.string()
      .required(t('confirmPasswordYup'))
      .oneOf([Yup.ref('password')], t('confirmPasswordYup2')),
    termsOfService: Yup.boolean()
      .required(`* ${t('policy')}`)
      .oneOf([true], `* ${t('policy')}`),
  });
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
          maxHeight: '98vh',
          overflow: 'auto',
          padding: ['2.5rem', '2.125rem'],
          '@media screen and (max-width: 600px)': {
            width: '19.625rem',
            padding: ['2.5rem', '2.125rem'],
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
              console.log(credentialObj.user);
              alert('Rejestracja udana');
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
                  text1={`${t('welcome')} SPAralige!`}
                  text2={t('heading')}
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
                  label={t('password')}
                  name="password"
                />
                <Field
                  component={TextField}
                  type="password"
                  label={t('password2')}
                  name="confirmPassword"
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="termsOfService"
                  Label={{
                    label: `${t('privacy')}`,
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
                  {t('register')}
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
                  {t('or')}
                </Typography>
                <FacebookAndGoogleBox loginOrRegister="register" />
                <SignOrResetLink
                  issueText={t('account')}
                  linkText={t('login')}
                  handleOnClick={prop.handleLoginOrRegisterTransfer}
                />
                <SignOrResetLink
                  issueText={t('forgot')}
                  linkText={t('reset')}
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

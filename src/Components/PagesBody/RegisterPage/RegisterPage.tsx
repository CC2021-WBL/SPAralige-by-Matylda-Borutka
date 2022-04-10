import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-mui';
import {
  Button,
  LinearProgress,
  Box,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import FormTitle from '../../Organisms/Form/FormTitle';
import FacebookAndGoogleBox from '../../Molecules/FacebookAndGoogleBox/FacebookAndGoogleBox';
import SignOrResetLink from '../../Organisms/LoginForm/SignOrResetLink';
import * as Yup from 'yup';
import React from 'react';

const RegisterValidation = Yup.object().shape({
  name: Yup.string().required('Nazwa użytkownika jest wymagana'),
  email: Yup.string()
    .required('Adres e-mail wymagany')
    .email('Niepoprawny adres e-mail'),
  password: Yup.string()
    .min(4, 'Hasło jest wymagane')
    .required('Hasło jest wymagane'),
  confirmPassword: Yup.string()
    .required('Wpisz hasło')
    .oneOf([Yup.ref('password')], 'Podane hasła różnią się'),
  termsOfService: Yup.boolean()
    .required('* Warunki użytkowania muszę zostać zaakceptowane.')
    .oneOf([true], '* Warunki użytkowania muszę zostać zaakceptowane.'),
});

const RegisterPage = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#FFFFFF',
        width: '31.25rem',
        height: '40.813rem',
        padding: ['2.5rem', '2.125rem'],
        '@media screen and (max-width: 600px)': {
          width: '19.625rem',
          padding: ['2.5rem', '2.125rem'],
        },
      }}
    >
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          termsOfService: false,
        }}
        validationSchema={RegisterValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            console.log(JSON.stringify(values, null, 2));
          }, 500);
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
                name="name"
                type="name"
                label="Nazwa użytkownika"
                // validate={validateName}
              />
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                // validate={validateEmail}
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
              <FacebookAndGoogleBox loginOrRegister="register" />
              <SignOrResetLink
                issueText="Masz już konto?"
                linkText="Zaloguj się"
              />
              <SignOrResetLink
                issueText="Zapomniałeś hasła? "
                linkText="Zresetuj hasło"
              />
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterPage;

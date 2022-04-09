import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Button, LinearProgress, Box, Stack, Typography } from '@mui/material';
import FormTitle from '../../Organisms/Form/FormTitle';
import FacebookAndGoogleBox from '../../Molecules/FacebookAndGoogleBox/FacebookAndGoogleBox';
import SignOrResetLink from '../../Organisms/LoginForm/SignOrResetLink';

interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  toggle: boolean;
}

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Adres e-mail wymagany';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Niepoprawny adres e-mail';
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = 'Nazwa użytkownika jest wymagana';
  }
  return error;
}

function validateToggle(value) {
  let error;
  if (!value) {
    error = 'Zaakceptowanie warunków jest koniecznie.';
  }
  return error;
}

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
          toggle: false,
        }}
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
                validate={validateName}
              />
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                validate={validateEmail}
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
              <Field type="checkbox" name="toggle" validate={validateToggle} />
              Wyrażam zgodę na warunki korzystania z serwisu
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

import * as Yup from 'yup';
import { Box } from '@mui/system';
import {
  Button,
  LinearProgress,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';

import ClosingIcon from '../../Organisms/LoginForm/CloseIcon';

const ContactFormValidation = Yup.object().shape({
  email: Yup.string()
    .required('Adres e-mail wymagany')
    .email('Niepoprawny adres e-mail'),
  message: Yup.string().required('Nie wysyłaj pustej wiadomości!'),
});

const ContactFormModal = (prop: {
  open: boolean;
  handleClose: () => void;
  stateOfParent: () => void;
}) => {
  return (
    <>
      <Modal
        open={prop.open}
        onClose={prop.handleClose}
        aria-describedby="modal-contact-form"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#FFFFFF',
            width: '36rem',
            height: 'fit-content',
            borderRadius: '1rem',
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
              message: '',
            }}
            validationSchema={ContactFormValidation}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                const data = JSON.stringify(values, null, 2);
                console.log(data);
                // alert('Twoja wiadomość została wysłana');
                prop.handleClose();
                const openMessage = async () => {
                  prop.stateOfParent();
                };
                openMessage();
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Stack spacing={'1.4375rem'}>
                  <Box
                    sx={{
                      height: '4.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '3rem',
                      '@media screen and (min-width: 600px)': {
                        marginBottom: '2rem',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        height: '2rem',
                        fontSize: '1.4375rem',
                      }}
                      variant="h5"
                    >
                      Napisz do nas
                    </Typography>
                    <Typography
                      sx={{
                        height: '1.313rem',
                        fontSize: '0.9375rem',
                      }}
                      variant="subtitle1"
                    >
                      Chcesz o coś zapytać? Masz jakies spostrzeżenia i uwagi?
                      Daj znać i wyślij nam wiadomosć przez poniższy formularz.
                    </Typography>
                  </Box>
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                  />
                  <Field
                    component={TextField}
                    name="message"
                    type="message"
                    label="Wiadomość"
                    fullWidth
                    multiline
                    rows={5}
                    autocomplete="none"
                  />
                  {isSubmitting && <LinearProgress />}
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{ width: '5.625rem', alignSelf: 'flex-end' }}
                  >
                    Wyślij
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default ContactFormModal;

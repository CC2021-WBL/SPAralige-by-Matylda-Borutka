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
import { useTranslation } from 'react-i18next';

import ClosingIcon from '../../Organisms/LoginForm/CloseIcon';

const ContactFormModal = (prop: { open: boolean; handleClose: () => void }) => {
  const { t } = useTranslation('about&contact');
  const ContactFormValidation = Yup.object().shape({
    email: Yup.string().required(t('requiredEmail')).email(t('wrongEmail')),
    message: Yup.string().required(t('requiredMessage')),
  });
  return (
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
              alert('Twoja wiadomość została wysłana');
              prop.handleClose();
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
                    {t('write')}
                  </Typography>
                  <Typography
                    sx={{
                      height: '1.313rem',
                      fontSize: '0.9375rem',
                    }}
                    variant="subtitle1"
                  >
                    {t('contactDescription')}
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
                  label={t('message')}
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
                  {t('send')}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ContactFormModal;

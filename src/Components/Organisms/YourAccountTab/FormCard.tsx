import { Box } from '@mui/system';
import { Button, Stack } from '@mui/material';
import { Field, Form, Formik, useFormik } from 'formik';

type FormCardPropTypes = {
  title: string;
  name: string;
  // mode: any;
  onClick: any;
  placeholder?: string;
  type?: string;
  initialValues: any;
  onSubmit: any;
  id: string;
  text: string;
  toggleName?: boolean;
  toggleEmail?: boolean;
  togglePassword?: boolean;
};

const userObject = {
  userName: 'initial',
  userEmail: 'initial',
  userPassword: 'initial',
};

const FormCard = (prop: FormCardPropTypes) => {
  console.log(
    'FormCard',
    prop.toggleName,
    prop.toggleEmail,
    prop.togglePassword,
  );

  return (
    <div className="formCard" style={{ border: '2px dotted grey' }}>
      <Formik initialValues={prop.initialValues} onSubmit={prop.onSubmit}>
        <Form>
          <Box component="h6" color="rgba(0,0,0,.38)">
            {prop.title}
          </Box>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              border: '1px solid black',
            }}
          >
            {/* display values stored in userObject - when not toggled by button */}
            {!prop.toggleName && prop.name == 'name' && (
              <Box sx={{ position: 'static', pl: '1rem' }}>
                {userObject.userName}
              </Box>
            )}
            {!prop.toggleEmail && prop.name == 'email' && (
              <Box sx={{ position: 'static', pl: '1rem' }}>
                {userObject.userEmail}
              </Box>
            )}
            {!prop.togglePassword && prop.name == 'password' && (
              <Box sx={{ position: 'static', pl: '1rem' }}>
                {userObject.userPassword}
              </Box>
            )}
            {/* == */}

            {/* display form fields */}
            {prop.toggleName && prop.name == 'name' && (
              <Box sx={{ position: 'static', pl: '1rem' }}>
                <Field
                  name={prop.name}
                  id={prop.id}
                  type={prop.type}
                  placeholder={prop.placeholder}
                  className={prop.name}
                />
              </Box>
            )}
            {prop.toggleEmail && prop.name == 'email' && (
              <Box sx={{ position: 'static', pl: '1rem' }}>
                <Field
                  name={prop.name}
                  id={prop.id}
                  type={prop.type}
                  placeholder={prop.placeholder}
                  className={prop.name}
                />
              </Box>
            )}
            {prop.togglePassword && prop.name == 'password' && (
              <Box sx={{ position: 'static', pl: '1rem' }}>
                <Field
                  name={prop.name}
                  id={prop.id}
                  type={prop.type}
                  placeholder={prop.placeholder}
                  className={prop.name}
                />
              </Box>
            )}
            {/* display form fields */}

            {!prop.toggleName && (
              <Button
                onClick={prop.onClick}
                style={{ border: '1px solid green' }}
              >
                {!prop.toggleName && prop.name == 'name' && 'zmień imię'}
                {!prop.toggleEmail && prop.name == 'email' && 'zmień email'}
                {!prop.togglePassword &&
                  prop.name == 'password' &&
                  'zmień hasło'}
              </Button>
            )}

            {!prop.toggleEmail && (
              <Button
                onClick={prop.onClick}
                style={{ border: '1px solid green' }}
              >
                {!prop.toggleName && prop.name == 'name' && 'zmień imię'}
                {!prop.toggleEmail && prop.name == 'email' && 'zmień email'}
                {!prop.togglePassword &&
                  prop.name == 'password' &&
                  'zmień hasło'}
              </Button>
            )}
            {!prop.togglePassword && (
              <Button
                onClick={prop.onClick}
                style={{ border: '1px solid green' }}
              >
                {!prop.toggleName && prop.name == 'name' && 'zmień imię'}
                {!prop.toggleEmail && prop.name == 'email' && 'zmień email'}
                {!prop.togglePassword &&
                  prop.name == 'password' &&
                  'zmień hasło'}
              </Button>
            )}

            {(prop.toggleName || prop.toggleEmail || prop.togglePassword) && (
              <Button className={prop.name}>
                {/* {!prop.toggleName && prop.name == 'name' && 'zmień'} */}
                {prop.toggleName && prop.name == 'name' && 'zapisz '}

                {/* {!prop.toggleEmail && prop.name == 'email' && 'zmień email'} */}
                {prop.toggleEmail && prop.name == 'email' && 'zapisz email'}

                {/* {!prop.togglePassword &&
                  prop.name == 'password' &&
                  'zmień hasło'} */}
                {prop.togglePassword &&
                  prop.name == 'password' &&
                  'zapisz hasło'}
              </Button>
            )}
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCard;

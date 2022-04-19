import { Box } from '@mui/system';
import { Button, Stack } from '@mui/material';
import { Field, Form, Formik, useFormik } from 'formik';

type FormCardPropTypes = {
  title: string;
  name: string;
  mode: any;
  onClick: any;
  placeholder?: string;
  type?: string;
  initialValues: any;
  onSubmit: any;
  id: string;
  // form prop types:
};

const whenDisplay = {
  ' .display': {
    display: 'bock',
  },
  ' .edit': {
    display: 'none',
  },
};
const whenEdit = {
  '.display': {
    display: 'none',
  },
  '.edit': {
    display: 'block',
  },
};
const FormCard = (prop: FormCardPropTypes) => {
  // const [mode, setMode] = useState('display');

  return (
    <div className="formCard" style={{ outline: '1px dotted grey' }}>
      <Formik initialValues={prop.initialValues} onSubmit={prop.onSubmit}>
        <Form>
          <Box component="h6" color="rgba(0,0,0,.38)">
            {prop.title}
          </Box>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ position: 'absolute', pl: '1rem', ...whenDisplay }}>
              <Box className={prop.mode}>display from DB</Box>
            </Box>
            <Box sx={{ position: 'static', pl: '1rem', ...whenEdit }}>
              <Box className={prop.mode}>
                <Field
                  name={prop.name}
                  id={prop.id}
                  type={prop.type}
                  placeholder={prop.placeholder}
                  className={prop.name}
                />
              </Box>
            </Box>
            <Button onClick={prop.onClick} className={prop.name}>
              {prop.name == 'name' &&
                prop.mode == 'display' &&
                prop.name &&
                'zmień imię'}
              {prop.name == 'name' && prop.mode == 'edit' && 'zapisz imię'}

              {prop.name == 'email' &&
                prop.mode == 'display' &&
                prop.name &&
                'zmień email'}
              {prop.name == 'email' && prop.mode == 'edit' && 'zapisz email'}

              {prop.name == 'password' &&
                prop.mode == 'display' &&
                prop.name &&
                'zmień hasło'}
              {prop.name == 'password' && prop.mode == 'edit' && 'zapisz hasło'}
            </Button>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCard;

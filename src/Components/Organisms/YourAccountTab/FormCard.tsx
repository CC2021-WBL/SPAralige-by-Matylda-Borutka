import { Box } from '@mui/system';
import { Button, Stack, TextField } from '@mui/material';
import { Field, Form, Formik, useFormik } from 'formik';

import BoxWithButton from './BoxWithButton';

const FieldStyle = {
  border: 'none',
  borderBottom: '1px solid grey',
  marginLeft: '1rem',
};

const FormCardStyle = {
  background: 'rgba(200,200,200, 0.1)',
};

const InputAndValueStyle = {
  margin: '0 .5rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(200, 200, 200, 0.1)',
  borderRadius: '1rem',
};

const BoxWithButtonStyle = {
  padding: '0 1rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

type FormCardPropTypes = {
  title: string;
  name: string;
  onClick: any;
  placeholder?: string;
  type?: string;
  // initialValues: any;
  onSubmit: any;
  id: string;
  text: string;
  toggleName?: boolean;
  toggleEmail?: boolean;
  togglePassword?: boolean;
  className?: string;
  formik: any;
  onChange: any;
  value: any;
};

const FormCard = (prop: FormCardPropTypes) => {
  console.log(
    'FormCard',
    prop.toggleName,
    prop.toggleEmail,
    prop.togglePassword,
  );

  const BoxDisplay = () => {
    // first display initial name from userObject if not toggled with button "edit"
    if (!prop.toggleName && prop.name == 'name')
      return (
        <BoxWithButton
          btnText="zmień imię"
          obj={prop.value}
          onClick={prop.onClick}
          BoxWithButtonStyle={BoxWithButtonStyle}
        />
      );
    else if (!prop.toggleEmail && prop.name == 'email')
      return (
        <BoxWithButton
          btnText="zmień email"
          obj={prop.value}
          onClick={prop.onClick}
          BoxWithButtonStyle={BoxWithButtonStyle}
        />
      );
    else if (!prop.togglePassword && prop.name == 'password')
      return (
        <BoxWithButton
          btnText="zmień hasło"
          obj={prop.value}
          onClick={prop.onClick}
          BoxWithButtonStyle={BoxWithButtonStyle}
        />
      );
    else return null;
  };

  const BoxEdit = () => {
    // first display edit field
    // then button with changed onClick and text "save"

    if (prop.toggleName && prop.name == 'name')
      return (
        <>
          <Box>
            {/* <Field */}
            <input
              name={prop.name}
              id={prop.id}
              type={prop.type}
              placeholder={prop.placeholder}
              className={prop.name}
              style={FieldStyle}
              // formik={prop.formik}
              value={prop.value}
              onChange={prop.onChange}
            />
            {prop.formik.errors.name ? <p>error</p> : 'noError'}
          </Box>
          <Button
            type="submit" // does that submit at the same time as onClick is run?
            onClick={prop.onClick}
          >
            zapisz imię
          </Button>
        </>
      );
    else if (prop.toggleEmail && prop.name == 'email')
      return (
        <>
          <Box>
            <input
              name={prop.name}
              id={prop.id}
              type={prop.type}
              placeholder={prop.placeholder}
              className={prop.name}
              style={FieldStyle}
              // formik={prop.formik}
              value={prop.value}
              onChange={prop.onChange}
            />
            {prop.formik.errors.email ? <p>error</p> : 'noError'}
          </Box>
          <Button
            type="submit" // ?
            onClick={prop.onClick}
          >
            zapisz email
          </Button>
        </>
      );
    else if (prop.togglePassword && prop.name == 'password')
      return (
        <>
          <Box>
            <input
              name={prop.name}
              id={prop.id}
              type={prop.type}
              placeholder={prop.placeholder}
              className={prop.name}
              style={FieldStyle}
              // formik={prop.formik}
              value={prop.value}
              onChange={prop.onChange}
            />
            {prop.formik.errors.password ? <p>error</p> : 'noError'}
          </Box>
          <Button
            type="submit" // ?
            onClick={prop.onClick}
          >
            zapisz hasło
          </Button>
        </>
      );
    else return null;
  };

  return (
    <div className={prop.className} style={FormCardStyle}>
      {/* <Formik initialValues={prop.initialValues} onSubmit={prop.onSubmit}> */}
      {/* <Formik onSubmit={prop.onSubmit}> */}
      <form>
        {/* <Form> */}
        <Box component="h6" color="rgba(0,0,0,.38)" marginLeft=".5rem">
          {prop.title}
        </Box>
        <Stack sx={InputAndValueStyle}>
          {/* display values stored in userObject - when not toggled by button */}
          <BoxDisplay />
          <BoxEdit />
        </Stack>
        {/* </Form> */}
      </form>
    </div>
  );
};

export default FormCard;

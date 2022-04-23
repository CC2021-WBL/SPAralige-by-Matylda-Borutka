import * as Yup from 'yup';
import React from 'react';
import { Box, Stack } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';

import BasicSelect from './BasicSelect';
import FormCard from './FormCard';

// TODO: user info will be fetched from context
// const { state } = useContext(UserDataContext);
// const { userId } = state;

const FrameStyle = {
  background: 'rgba(200,200,200,0.2',
  padding: '.5rem .5rem',
  margin: '1rem 0 0',
  borderRadius: '1rem',
};

const HeaderStyle = {
  fontSize: '20px',
  color: '#616161',
  margin: '0',
  background: 'rgba(200,200,200,0.1)',
};

const StackStyle = {
  margin: '.5rem',
  background: 'rgba(200,200,200,.1)',
};

type HeaderPropTypes = {
  text: string;
};
const Header = (prop: HeaderPropTypes) => {
  return (
    <Box className="headerText" component="h6" sx={HeaderStyle}>
      {prop.text}
    </Box>
  );
};
const YourAccountFrame = () => {
  const [toggleName, setToggleName] = React.useState<boolean>(false);
  const [toggleEmail, setToggleEmail] = React.useState<boolean>(false);
  const [togglePassword, setTogglePassword] = React.useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: 'a',
      email: 'b',
      password: 'c',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(5, 'imie musi być krótsze')
        .required('wpisz imię i nazwisko'),
    }),
    onSubmit: (v) => {
      console.log(v);
    },
  });
  console.log(formik.errors.name);

  return (
    <div className="yourAccountFrame" style={FrameStyle}>
      <Header text="Twoje dane" />
      <FormCard
        title="imię"
        name="name"
        id="name"
        toggleName={toggleName}
        placeholder="imię"
        // initialValues={formik.initialValues}
        onChange={formik.handleChange}
        value={formik.values.name}
        onSubmit={formik.handleSubmit}
        onClick={() => {
          setToggleName(!toggleName);
          formik.handleSubmit;
        }}
        type="text"
        text="zmień imię"
        className="FormCardName"
        formik={formik}
      />
      <FormCard
        title="email"
        name="email"
        id="email"
        toggleEmail={toggleEmail}
        placeholder="email"
        // initialValues={formik.initialValues}
        onChange={formik.handleChange}
        value={formik.values.email}
        onSubmit={formik.handleSubmit}
        onClick={() => {
          setToggleEmail(!toggleEmail);
        }}
        type="email"
        text="zmień email"
        className="FormCardEmail"
        formik={formik}
      />
      <FormCard
        title="hasło"
        name="password"
        id="password"
        togglePassword={togglePassword}
        placeholder="hasło"
        // initialValues={formik.initialValues}
        onChange={formik.handleChange}
        value={formik.values.password}
        onSubmit={formik.handleSubmit}
        onClick={() => {
          setTogglePassword(!togglePassword);
        }}
        type="password"
        text="zmień hasło"
        className="FormCardPassword"
        formik={formik}
      />
    </div>
  );
};

const SettingsFrame = () => {
  return (
    <div className="settingsFrame" style={FrameStyle}>
      <Header text="Ustawienia" />
      <Stack
        className="settingsFormCard"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={StackStyle}
      >
        <Box>Wersja językowa</Box>
        <BasicSelect langSelect />
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={StackStyle}
      >
        <Box>Zestaw kolorów</Box>
        <BasicSelect colorsSelect />
      </Stack>
    </div>
  );
};

const YourAccountTab = () => {
  return (
    <>
      <YourAccountFrame />
      <SettingsFrame />
    </>
  );
};

export default YourAccountTab;

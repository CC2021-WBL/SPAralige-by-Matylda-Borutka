import * as Yup from 'yup';
import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';

import BasicSelect from './BasicSelect';
import FormCard from './FormCard';

// TODO: user info will be fetched from context
// const { state } = useContext(UserDataContext);
// const { userId } = state;

// =========== header ============ //
type HeaderPropTypes = {
  text: string;
};
const Header = (prop: HeaderPropTypes) => {
  return (
    <Box component="h6" sx={{ fontSize: '20px', color: '#616161' }}>
      {prop.text}
    </Box>
  );
};

const YourAccountFrame = () => {
  const [toggleName, setToggleName] = React.useState<boolean>(false);
  const [toggleEmail, setToggleEmail] = React.useState<boolean>(false);
  const [togglePassword, setTogglePassword] = React.useState<boolean>(false);

  // console.log(toggleName, toggleEmail, togglePassword);

  const formik = useFormik({
    initialValues: {
      name: 'Katarynka',
      email: 'ebacis@wp.pl',
      password: '******',
    },
    onSubmit: (v) => {
      console.log(v);
    },
  });
  return (
    <div className="yourAccountFrame" style={{ outline: '1px solid red' }}>
      <Header text="Twoje dane" />
      <FormCard
        title="imię"
        name="name"
        id="name"
        toggleName={toggleName}
        placeholder="imię"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        onClick={() => {
          setToggleName(!toggleName), console.log('name clicked');
        }}
        type="text"
        text="zmień imię"
      />
      <FormCard
        title="email"
        name="email"
        id="email"
        toggleEmail={toggleEmail}
        placeholder="email"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        onClick={() => {
          setToggleEmail(!toggleEmail), console.log('email clicked');
        }}
        type="email"
        text="zmień email"
      />
      <FormCard
        title="hasło"
        name="password"
        id="password"
        togglePassword={togglePassword}
        placeholder="hasło"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        onClick={() => {
          setTogglePassword(!togglePassword), console.log('pass clicked');
        }}
        type="password"
        text="zmień hasło"
      />
    </div>
  );
};

// settingsFrame
const SettingsFrame = () => {
  return (
    <div className="settingsFrame" style={{ outline: '3px dotted red' }}>
      <Header text="Ustawienia" />
      <Stack
        className="settingsFormCard"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ padding: '1rem', outline: '1px dotted grey' }}
      >
        <Box>Wersja językowa</Box>
        <BasicSelect langSelect />
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ padding: '1rem' }}
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

import * as Yup from 'yup';
import { Box, Stack } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import { useState } from 'react';

import BasicSelect from './BasicSelect';
import FormCard from './FormCard';

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
  const [formMode, setFormMode] = useState('display');
  const clickHandler = (e) => {
    console.log(e.target.className);
    formMode == 'display' && setFormMode('edit');
    formMode == 'edit' && setFormMode('display');
  };
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
    <div className="yourAccountFrame" style={{ outline: '3px dotted red' }}>
      <Header text="Twoje dane" />
      <FormCard
        title="imię"
        name="name"
        id="name"
        mode={formMode}
        placeholder="imię"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        onClick={clickHandler}
        type="text"
      />
      <FormCard
        title="email"
        name="email"
        id="email"
        mode={formMode}
        placeholder="email"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        onClick={clickHandler}
        type="email"
      />
      <FormCard
        title="hasło"
        name="password"
        id="password"
        mode={formMode}
        placeholder="hasło"
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        onClick={clickHandler}
        type="text"
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

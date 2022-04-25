import * as Yup from 'yup';
import React from 'react';
import { useFormik } from 'formik';

import FormCard from './FormCard';
import FrameStyle from './FrameStyle';
import Header from './Header';

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
      email: Yup.string()
        .email('email niepoprawny')
        .required('wpisz poprawny email'),
    }),
    onSubmit: (v) => {
      console.log('submitting', v);
    },
  });

  return (
    <div className="yourAccountFrame" style={FrameStyle}>
      <Header text="Twoje dane" />
      <FormCard
        title="imię"
        name="name"
        id="name"
        toggleName={toggleName}
        placeholder="imię"
        initialValues={formik.initialValues}
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
        initialValues={formik.initialValues}
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
        initialValues={formik.initialValues}
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
export default YourAccountFrame;

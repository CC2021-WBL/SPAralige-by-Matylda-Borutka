import { Box } from "@mui/system";
import { Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";

import BoxWithButton from "./BoxWithButton";

const TitleStyle = {
  color: "rgba(0,0,0,.38)",
  marginLeft: ".5rem",
};

const ErrorStyle = {
  fontSize: "8px",
  color: "red",
  marginLeft: "1rem",
};
const FieldStyle = {
  border: "none",
  borderBottom: "1px solid grey",
  marginLeft: "1rem",
};

const InputAndValueStyle = {
  margin: "0 .5rem",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // background: "rgba(200, 200, 200, 0.1)",
  // borderRadius: "1rem",
};

const BoxWithButtonStyle = {
  padding: "0 1rem",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

type FormCardPropTypes = {
  title?: string;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  placeholder?: string;
  type?: string;
  initialValues?: any;
  onSubmit?: any;
  id?: string;
  text?: string;
  toggleName?: boolean;
  toggleEmail?: boolean;
  togglePassword?: boolean;
  className?: string;
  formik?: any;
  onChange?: any;
  value?: any;
};

type BoxDisplayPropTypes = {
  name?: string;
  toggleName?: boolean;
  toggleEmail?: boolean;
  togglePassword?: boolean;
  onClick?: any;
  value?: any;
};

const BoxDisplay = (prop: BoxDisplayPropTypes) => {

  if (!prop.toggleName && prop.name == "name")
    return (
      <BoxWithButton
        btnText="zmień"
        obj={prop.value}
        onClick={prop.onClick}
        BoxWithButtonStyle={BoxWithButtonStyle}
      />
    );
  else if (!prop.toggleEmail && prop.name == "email")
    return (
      <BoxWithButton
        btnText="zmień"
        obj={prop.value}
        onClick={prop.onClick}
        BoxWithButtonStyle={BoxWithButtonStyle}
      />
    );
  else if (!prop.togglePassword && prop.name == "password")
    return (
      <BoxWithButton
        btnText="zmień"
        obj={prop.value}
        onClick={prop.onClick}
        BoxWithButtonStyle={BoxWithButtonStyle}
      />
    );
  else return null;
};

const BoxEdit = (prop: FormCardPropTypes) => {

  if (prop.toggleName && prop.name == "name")
    return (
      <>
        <Box>
          <Field
            name={prop.name}
            id={prop.id}
            type={prop.type}
            placeholder={prop.placeholder}
            className={prop.name}
            style={FieldStyle}
            formik={prop.formik}
            value={prop.value}
            onChange={prop.onChange}
          />
          {prop.formik.errors.name ? (
            <p style={{ position: "absolute", ...ErrorStyle }}>
              {prop.formik.errors.name}
            </p>
          ) : null}
        </Box>
        <Button
          type="submit" // does that submit at the same time as onClick is run?
          onClick={prop.onClick}
        >
          zapisz
        </Button>
      </>
    );
  else if (prop.toggleEmail && prop.name == "email")
    return (
      <>
        <Box>
          <Field
            name={prop.name}
            id={prop.id}
            type={prop.type}
            placeholder={prop.placeholder}
            className={prop.name}
            style={FieldStyle}
            formik={prop.formik}
            value={prop.value}
            onChange={prop.onChange}
          />
          {prop.formik.errors.email ? (
            <p style={{ position: "absolute", ...ErrorStyle }}>
              {prop.formik.errors.email}
            </p>
          ) : null}
        </Box>
        <Button
          type="submit" // ?
          onClick={prop.onClick}
        >
          zapisz
        </Button>
      </>
    );
  else if (prop.togglePassword && prop.name == "password")
    return (
      <>
        <Box>
          <Field
            name={prop.name}
            id={prop.id}
            type={prop.type}
            placeholder={prop.placeholder}
            className={prop.name}
            style={FieldStyle}
            formik={prop.formik}
            value={prop.value}
            onChange={prop.onChange}
          />
          {prop.formik.errors.password ? (
            <p style={ErrorStyle}>{prop.formik.errors.password}</p>
          ) : null}
        </Box>
        <Button
          type="submit"
          onClick={prop.onClick}
        >
          zapisz
        </Button>
      </>
    );
  else return null;
};

const FormCard = (prop: FormCardPropTypes) => {

  return (
    <div className={prop.className}>
      <Formik
        initialValues={prop.initialValues}
        onSubmit={prop.onSubmit}
        validateOnBlur
      >
        <Form>
          <Box component="h6" sx={TitleStyle}>
            {prop.title}
          </Box>
          <Stack sx={InputAndValueStyle}>
            <BoxDisplay
              toggleName={prop.toggleName}
              toggleEmail={prop.toggleEmail}
              togglePassword={prop.togglePassword}
              name={prop.name}
              value={prop.value}
              onClick={prop.onClick}
            />
            <BoxEdit
              toggleName={prop.toggleName}
              toggleEmail={prop.toggleEmail}
              togglePassword={prop.togglePassword}
              name={prop.name}
              id={prop.id}
              type={prop.type}
              placeholder={prop.placeholder}
              className={prop.name}
              formik={prop.formik}
              value={prop.value}
              onChange={prop.onChange}
              onClick={prop.onClick}
            />
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCard;

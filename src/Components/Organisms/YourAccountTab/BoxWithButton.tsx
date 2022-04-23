import { Box, Button } from '@mui/material';

type BoxWithButtonPropTypes = {
  BoxWithButtonStyle: object;
  onClick: any;
  btnText: string;
  obj: string;
};

const BoxWithButton = (prop: BoxWithButtonPropTypes) => {
  return (
    <>
      <Box style={prop.BoxWithButtonStyle}>{prop.obj}</Box>
      <Button onClick={prop.onClick}>{prop.btnText}</Button>
    </>
  );
};

export default BoxWithButton;

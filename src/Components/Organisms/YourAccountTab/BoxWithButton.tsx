/* eslint-disable no-unused-vars */

import { Box, Button } from '@mui/material';

type BoxWithButtonPropTypes = {
  BoxWithButtonStyle: object;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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

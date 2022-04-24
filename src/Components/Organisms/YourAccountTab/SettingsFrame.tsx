import { Box, Stack } from '@mui/material';

import BasicSelect from './BasicSelect';
import FrameStyle from './FrameStyle';
import Header from './Header';

const StackStyle = {
  margin: '.5rem',
  // background: 'rgba(200,200,200,.1)',
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
        <BasicSelect langSelect/>
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

export default SettingsFrame;

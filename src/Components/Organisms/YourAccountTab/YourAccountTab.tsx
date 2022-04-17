import { Box, Button, Stack } from '@mui/material';

import FormCard from './FormCard';

const Header = () => {
  return (
    <Box component="h6" sx={{ fontSize: '20px', color: '#616161' }}>
      Twoje dane
    </Box>
  );
};

const YourAccountFormFrame = () => {
  return (
    <>
      <FormCard title="imię" name="Krystyna" />
      <FormCard title="email" name="cristal@out.it" />
      <FormCard title="hasło" name="********" />
    </>
  );
};

const SettingsFrame = () => {
  return (
    <>
      <Box component="h6" sx={{ fontSize: '20px', color: '#616161' }}>
        Ustawienia
      </Box>
      <Stack flexDirection="row" justifyContent="space-between">
        <Box>Wersja językowa</Box>
        <Button>polska</Button>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        <Box>Zestaw kolorów</Box>
        <Button>domyslny</Button>
      </Stack>
    </>
  );
};

const YourAccountTab = () => {
  return (
    <>
      <Header />
      <YourAccountFormFrame />
      <SettingsFrame />
    </>
  );
};

export default YourAccountTab;

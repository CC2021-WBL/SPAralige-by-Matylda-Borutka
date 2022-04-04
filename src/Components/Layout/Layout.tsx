import { AppBar, Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import FooterStyled from '../Organisms/FooterStyled';
import MainWrapper from './MainWrapper';

const Layout = () => {
  return (
    <MainWrapper>
      {/* Miejsce na nawigację */}
      <Box sx={{ height: 80 }}>
        <AppBar sx={{ height: 80 }} />
      </Box>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        {/* Mijesce na content - będzie się opierał na komponencie Grid
          poniżej przykłądowy komponent z respo -  */}
        <Outlet />
      </Container>
      {/* Miejsce na footer - można użyć stworzonego komponentu lub zamienić na własny */}
      <FooterStyled />
    </MainWrapper>
  );
};

export default Layout;

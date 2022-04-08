import { AppBar, Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from './../Organisms/Footer/Footer';
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
      <Footer />
    </MainWrapper>
  );
};

export default Layout;

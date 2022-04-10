import { AppBar, Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from '../../Organisms/Footer/Footer';
import MainWrapper from './MainWrapper';

Footer;

const Layout = () => {
  return (
    <MainWrapper>
      <Box sx={{ height: 80 }}>
        <AppBar sx={{ height: 80 }} />
      </Box>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </MainWrapper>
  );
};

export default Layout;

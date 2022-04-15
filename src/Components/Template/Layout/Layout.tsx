import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from '../../Template/Footer/Footer';
import MainWrapper from './MainWrapper';
import NavBar from './../../Organisms/NavBar/NavBar';

NavBar;

const Layout = () => {
  return (
    <MainWrapper>
      <Box>
        <NavBar />
      </Box>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </MainWrapper>
  );
};

export default Layout;

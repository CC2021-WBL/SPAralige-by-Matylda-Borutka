import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from '../../Template/Footer/Footer';
import MainWrapper from './MainWrapper';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <MainWrapper>
      <Box>
        <NavBar />
      </Box>
      <Container
        component="div"
        id="body-page"
        maxWidth="lg"
        sx={{ flexGrow: 1 }}
      >
        <Outlet />
      </Container>
      <Footer />
    </MainWrapper>
  );
};

export default Layout;

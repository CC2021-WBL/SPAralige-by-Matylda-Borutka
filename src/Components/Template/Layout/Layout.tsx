import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import FooterStyled from '../Footer/FooterStyled';
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
      <FooterStyled />
    </MainWrapper>
  );
};

export default Layout;

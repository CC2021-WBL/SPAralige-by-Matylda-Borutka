import { AppBar, Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import FooterStyled from '../Footer/FooterStyled';
import MainWrapper from './MainWrapper';

const Layout = () => {
  return (
    <MainWrapper>
      <Box sx={{ height: 80 }}>
        <AppBar sx={{ height: 80 }} />
      </Box>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Container>
      <FooterStyled />
    </MainWrapper>
  );
};

export default Layout;

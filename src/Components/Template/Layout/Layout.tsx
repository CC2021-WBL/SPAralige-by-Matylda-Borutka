import { Box, Container } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import CookiesBanner from '../../Organisms/CookiesBanner/CookiesBanner';
import ErrorFallback from '../../PagesBody/ErrorFallback/ErrorFallback';
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </Container>
      <Footer />
      <CookiesBanner />
    </MainWrapper>
  );
};

export default Layout;

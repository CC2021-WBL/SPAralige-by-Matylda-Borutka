import { Route, Routes } from 'react-router-dom';

import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import AccountPage from './Components/PagesBody/AccountPage/AccountPage';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './Components/PagesBody/ErrorFallback/ErrorFallback';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import ResponsiveDrawerCopy from './Components/PagesBody/ServicesPage/ResponsiveDrawerCopy';
import ServicesPage from './Components/PagesBody/ServicesPage/ServicesPage';

// import ResponsiveDrawer from './Components/PagesBody/ServicesPage/ResponsiveDrawer';



function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/burger" element={<ResponsiveDrawerCopy />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

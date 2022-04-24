import { CircularProgress } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import AccountPage from './Components/PagesBody/AccountPage/AccountPage';
import ErrorFallback from './Components/PagesBody/ErrorFallback/ErrorFallback';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import ServicesPage from './Components/PagesBody/ServicesPage/ServicesPage';
import i18n from './i18n';

function App() {
  const Loader = () => (
    <div className="loading">
      <CircularProgress />
    </div>
  );

  useEffect(() => {
    const getLanguage = () => {
      localStorage.getItem('i18nextLng') !== ('pl' && 'en') &&
        localStorage.setItem('i18nextLng', 'pl');
    };

    getLanguage();
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <div className="App">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />

                <Route path="/services" element={<ServicesPage />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/account" element={<AccountPage />} />

                <Route path="/reservations" element={<ReservationsPage />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </div>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;

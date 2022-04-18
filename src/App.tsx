import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import AccountPage from './Components/PagesBody/AccountPage/AccountPage';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import ServicesPage from './Components/PagesBody/ServicesPage/ServicesPage';
import TestingBody from './Components/PagesBody/TestingBody';
import i18n from './i18n';

function App() {
  const Loader = () => (
    <div className="loading">
      <div>loading...</div>
    </div>
  );
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/test" element={<TestingBody />} />

              <Route path="/services" element={<ServicesPage />} />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/account" element={<AccountPage />} />

              <Route path="/reservations" element={<ReservationsPage />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;

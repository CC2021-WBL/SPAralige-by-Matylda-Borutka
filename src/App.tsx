import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import AccountPage from './Components/PagesBody/AccountPage/AccountPage';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import TreatmentsPage from './Components/PagesBody/TreatmentsPage/TreatmentsPage';
import {
  useTranslation,
  withTranslation,
  Trans,
  I18nextProvider,
} from 'react-i18next';
import i18n from './i18n';
// Component using the Trans component
function MyComponent() {
  const { t } = useTranslation('landingPage');
  return (
    <Trans t={t} i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation('landingPage');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className="App"
      style={{
        zIndex: 111,
        position: 'absolute',
        color: 'black',
        marginTop: '200px',
      }}
    >
      <div className="App-header">
        <button type="button" onClick={() => changeLanguage('pl')}>
          pl
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t('description.part2')}</div>
    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <div className="App">
          <Page />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />

              <Route path="/treatments" element={<TreatmentsPage />} />

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

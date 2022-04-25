import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import AccountPage from './Components/PagesBody/AccountPage/AccountPage';
import ErrorFallback from './Components/PagesBody/ErrorFallback/ErrorFallback';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import ServicesPage from './Components/PagesBody/ServicesPage/ServicesPage';

const Loader = () => {
  return (
    <div className="App">
      <div>loading...</div>
    </div>
  );
};

function App() {
  return (
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
  );
}

export default App;

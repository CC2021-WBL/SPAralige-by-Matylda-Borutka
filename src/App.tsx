import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';

import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import ErrorFallback from './Components/PagesBody/ErrorFallback/ErrorFallback';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import ServicesPage from './Components/PagesBody/ServicesPage/ServicesPage';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

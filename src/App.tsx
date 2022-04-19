import { Route, Routes } from 'react-router-dom';

import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import AccountPage from './Components/PagesBody/AccountPage/AccountPage';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import ResponsiveDrawer from './Components/PagesBody/ServicesPage/ResponsiveDrawer';
import ResponsiveDrawerCopy from './Components/PagesBody/ServicesPage/ResponsiveDrawerCopy';
import ServicesPage from './Components/PagesBody/ServicesPage/ServicesPage';
import TestingBody from './Components/PagesBody/TestingBody';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<TestingBody />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/account" element={<AccountPage />} />

          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/burger" element={<ResponsiveDrawerCopy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

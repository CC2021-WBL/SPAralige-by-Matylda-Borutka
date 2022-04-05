import { Route, Routes } from 'react-router-dom';

import AboutPage from './Components/Pages/AboutPage/AboutPage';
import AccountPage from './Components/Pages/AccountPage/AccountPage';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Layout from './Components/Layout/Layout';
import ReservationsPage from './Components/Pages/ReservationsPage/ReservationsPage';
import TreatmentsPage from './Components/Pages/TreatmentsPage/TreatmentsPage';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;

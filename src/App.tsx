import { Route, Routes } from 'react-router-dom';

import AboutPage from './Components/PagesBody/AboutPage/AboutPage';
import AccountPage from './Components/PagesBody/AccountPage/AccountPage';
import BurgerTest from './Components/PagesBody/BurgerTest';
import LandingPage from './Components/PagesBody/LandingPage/LandingPage';
import Layout from './Components/Template/Layout/Layout';
import ReservationsPage from './Components/PagesBody/ReservationsPage/ReservationsPage';
import TreatmentsPage from './Components/PagesBody/TreatmentsPage/TreatmentsPage';

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

          <Route path="/burger" element={<BurgerTest />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

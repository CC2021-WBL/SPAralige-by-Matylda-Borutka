import { Route, Routes } from 'react-router-dom';

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

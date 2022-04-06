import { Route, Routes } from 'react-router-dom';

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Layout from './Components/Layout/Layout';
import TestingBody from './Components/Pages/TestingBody/TestingBody';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<TestingBody />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

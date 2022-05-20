import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import CovidData from './components/CovidData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data/:name" element={<CovidData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

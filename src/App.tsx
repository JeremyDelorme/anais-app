import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import MezonPage from './components/pages/MezonPage';
import SelonPage from './components/pages/SelonPage';
import MagasinPage from './components/pages/MagasinPage';
import TemoignagesPage from './components/pages/TemoignagesPage';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<MezonPage />} />
        <Route path='/selon' element={<SelonPage />} />
        <Route path='/magasin' element={<MagasinPage />} />
        <Route path='/temoignages' element={<TemoignagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ComunidadPremium from './pages/ComunidadPremium';
import Preguntas from './pages/Preguntas';
import Contacto from './pages/Contacto';
import Error from './pages/Error';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/comunidad-premium" element={<ComunidadPremium/>} />
      <Route path="/preguntas-frecuentes" element={<Preguntas/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;

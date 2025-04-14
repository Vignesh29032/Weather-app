import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Weather from './components/Weather';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
};

export default App;

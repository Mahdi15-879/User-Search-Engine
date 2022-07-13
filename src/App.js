import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Home from './components/Home';
import Navbar from './components/shared/Navbar';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

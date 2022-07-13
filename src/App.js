import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Navbar from './components/shared/Navbar';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

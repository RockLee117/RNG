import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Directions from './components/Directions';
import PreGame from './components/PreGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="directions" element={<Directions />} />
        <Route path="pregame" element={<PreGame />} />
      </Routes>
    </div>
  );
}
export default App;





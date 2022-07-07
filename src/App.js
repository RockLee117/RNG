import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Directions from './components/Directions';
import PreGame from './components/PreGame';
import PlayGame from './components/PlayGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="directions" element={<Directions />} />
        <Route path="pregame" element={<PreGame />} />
        <Route path="playgame" element={<PlayGame />} />
      </Routes>
    </div>
  );
}
export default App;





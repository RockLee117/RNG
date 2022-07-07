import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';

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

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className="startPage">
      <h1 className="title">RNG</h1>
      <div className="playButton">
        <button onClick={() => navigate("/directions")}>PLAY</button>
      </div>
    </div>
    </>
  );
}

function Directions() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h2>Directions:</h2>
        <p>
          Do this then this
        </p>
        <button onClick={() => navigate("/pregame")}>Next</button>
      </div>
    </>
  );
}

function PreGame() {
  return(
    <>
      <div>
        <h2>Pre-Game:</h2>
      </div>
      <nav>

      </nav>
    </>
  );
}




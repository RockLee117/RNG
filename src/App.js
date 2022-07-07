import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="directions" element={<Directions />} />
        <Route path="directions/pregame" element={<PreGame />} />
      </Routes>
    </div>
  );
}
export default App;

function Home() {
  
  return (
    <>
    <div className="startPage">
      <h1 className="title">RNG</h1>
      <div className="playButton">
        <button >PLAY</button>
      </div>
    </div>
      <nav>
        <Link to="/directions">About</Link>
      </nav>
    </>
  );
}

function Directions() {
  return (
    <>
      <main>
        <h2>Directions:</h2>
        <p>
          Do this then this
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/directions/pregame">Next</Link>
      </nav>
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




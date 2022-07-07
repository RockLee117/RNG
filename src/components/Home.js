import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles/Home.css';

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
export default Home;
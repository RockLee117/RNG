import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles/PreGame.css';

function PreGame() {
  let num = 2;
  const navigate = useNavigate();
  return(
    <>
      <div>
        <h2>Pre-Game:</h2>
        <p>How many numbers to you want to pick from?</p>
        <p>{num}</p>
        <button className='leftButton' onClick={num-=1}></button>
        <button className='rightButton' onClick={num+=1}></button>
        <button onClick={() => navigate("/playgame")}>Go</button>
      </div>
    </>
  );
}
export default PreGame;
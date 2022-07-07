import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles/PreGame.css';

function PreGame() {
  let num = 2;
  return(
    <>
      <div>
        <h2>Pre-Game:</h2>
        <p>{num}</p>
        <button className='leftButton' onClick={num-=1}></button>
        <button className='rightButton' onClick={num+=1}></button>
      </div>
    </>
  );
}
export default PreGame;
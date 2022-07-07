import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './styles/PreGame.css';

function PreGame() {
  const navigate = useNavigate();

  const [count, setCount] = useState(2);
  const incrementCount = () => {
    if(count < 20){
      setCount(count + 1);
    }
  };
  const decrementCount = () => {
    if(count > 2){
      setCount(count - 1);
    }
  };
  return( 
    <>
      <div>
        <h2>Pre-Game:</h2>
        <p>How many numbers to you want to pick from?</p>
        {count}
        <button className='leftButton' onClick={decrementCount}></button>
        <button className='rightButton' onClick={incrementCount}></button>
        <button onClick={() => navigate("/playgame")}>Go</button>
      </div>
    </>
  );
}
export default PreGame;
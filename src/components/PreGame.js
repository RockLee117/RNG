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
        <h2>How many numbers to you want to pick from?</h2>
        <div className="number">
          {count}
        </div>
        
        <button className='leftButton' onClick={decrementCount}></button>
        <button className="GoButton" onClick={() => navigate("/playgame")}>Go</button>
        <button className='rightButton' onClick={incrementCount}></button>
      </div>
    </>
  );
}
export default PreGame;
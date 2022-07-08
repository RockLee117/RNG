import React, {useState} from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";
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
        <p>Use the below red and blue buttons to decrease and increase the number</p>
        <div className="number">
          {count}
        </div>
        
        <button className='leftButton' onClick={decrementCount}></button>

        {/* The number on screen (count) once you press the Go button will determine how many numbers you'll choose from in the next webpage */}
        <button className="GoButton" onClick={() => {
          navigate({
            pathname: "/playgame",
            search: createSearchParams({
              num: count 
            }).toString()
          })
        }}>Go</button>

        <button className='rightButton' onClick={incrementCount}></button>
      </div>
    </>
  );
}
export default PreGame;
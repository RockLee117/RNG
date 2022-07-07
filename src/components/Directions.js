import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles/Directions.css';

function Directions() {
  const navigate = useNavigate();
  return (
    <>
      <div className='main'>
        <h2>Directions:</h2>
        <div className="DirectionsText">
            <p>First you'll choose how many numbers you want to pick from. Then, once you start the game, out of the numbers that will appear on screen, you'll have to try to pick the correct number which is random every time you start a new game.
            </p>
        </div>
        <button onClick={() => navigate("/pregame")}>Next</button>
      </div>
    </>
  );
}
export default Directions;
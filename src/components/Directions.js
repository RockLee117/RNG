import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles/Directions.css';

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
export default Directions;
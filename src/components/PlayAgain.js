import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/PlayAgain.css';

function PlayAgain(){
    const navigate = useNavigate();
    return (
        <div>
            <h2>You Won!!!!</h2>
            <img src='./assets/filthyfrank.gif' alt='gif of filthy frank'></img>
            <button onClick={() => navigate('/pregame')}>Play Again</button>
            <button onClick={() => navigate('/')}>Quit</button>
        </div>
    );
}
export default PlayAgain;
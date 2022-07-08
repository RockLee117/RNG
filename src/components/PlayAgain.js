import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/PlayAgain.css';

function PlayAgain(){
    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="PlayAgain">
                <h1>You Won!!!!</h1>
                <button className='one' onClick={() => navigate('/pregame')}>Play Again</button>
                <button className='two' onClick={() => navigate('/')}>Quit</button>
            </div>
        </div>
        
    );
}
export default PlayAgain;
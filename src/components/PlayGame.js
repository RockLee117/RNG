import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './styles/PlayGame.css';

function PlayGame(){
    const navigate = useNavigate();

    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);        
    };
    return(
        <div>
            <button>MENU</button>
            <p>Number of Tries: {count}</p>
        </div>
    );
}
export default PlayGame;
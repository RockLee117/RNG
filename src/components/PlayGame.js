import React, {useState} from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import './styles/PlayGame.css';
import Modal from './Modal.js';

function PlayGame(){
    const navigate = useNavigate();
    const [searchparams] = useSearchParams();

    //modal implementation
    const [openModal, setOpenModal] = useState(false);

    // counts number of tries
    const [tries, setCount] = useState(0);
    const incrementCount = () => {
        setCount(tries + 1);        
    };

    //the numbers that appear on screen based on user input

    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    const numbers = arr.map((number) => {
        return <button className='number'>{number}</button>
    });

    const randomNum = Math.floor(Math.random() * searchparams.get('num'));

    return(
        <div>
            <div className='modal'>
                <button onClick={() => {
                    setOpenModal(true);
                }} className='menuButton'>MENU</button>
                {/* the openModal state is set to be false but when the MENU button is clicked, the openModal state is set to true so it's contents will render in */}
                {openModal && <Modal setOpenModal={setOpenModal}/> }
            </div>
            
            <p>Number of Tries: {tries}</p>
            
            <div className='numbers'>
                {numbers}
            </div>
            
            <p>Your Guess:</p>
            <input type='text'></input>
            
            <p>random number: {randomNum}</p>
        </div>
    );
}
export default PlayGame;
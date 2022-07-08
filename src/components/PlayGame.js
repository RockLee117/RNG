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

    const arr = [1,2,3,4,5];
    const numbers = arr.map((num) => {
        return <button>{num}</button>
    });

    return(
        <div>
            <div className='modal'>
                <button onClick={() => {
                    setOpenModal(true);
                }} className='menuButton'>MENU</button>
                {/* the openModal state is set to be false but when the MENU button is clicked, the openModal state is set to true so it's contents will render in */}
                {openModal && <Modal setOpenModal={setOpenModal}/> }
            </div>
            
            {numbers}
            {searchparams.get('num')}

            <p>Number of Tries: {tries}</p>
        </div>
    );
}
export default PlayGame;
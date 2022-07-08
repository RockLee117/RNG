import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './styles/PlayGame.css';
import Modal from './Modal.js';

function PlayGame(){
    const navigate = useNavigate();

    //modal implementation
    const [openModal, setOpenModal] = useState(false);

    // counts number of tries
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);        
    };

    return(
        <div>
            <button onClick={() => {
                setOpenModal(true);
            }} className='menuButton'>MENU</button>
            {/* the openModal state is set to be false but when the MENU button is clicked, the openModal state is set to true so it's contents will render in */}
            {openModal && <Modal setOpenModal={setOpenModal}/> }

            <p>Number of Tries: {count}</p>
        </div>
    );
}
export default PlayGame;
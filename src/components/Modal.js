import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/Modal.css'

function Modal( {setOpenModal} ){
    const navigate = useNavigate();

    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                {/* Resume button closes the modal and the exit button takes you back to the home screen */}
                <button onClick={() => setOpenModal(false) } className='resumeButton'>Resume</button>
                <button onClick={() => navigate('/')} className='exitButton'>Exit</button>
            </div>
        </div>
    );
}
export default Modal;
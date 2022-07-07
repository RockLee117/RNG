import React from 'react';
import {useNavigate} from 'react-router-dom';

function Modal(){
    const navigate = useNavigate();

    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                {/* Resume button closes the modal and the exit button takes you back to the home screen */}
                <button>Resume</button>
                <button onClick={() => navigate('/')}>Exit</button>
            </div>
        </div>
    );
}
export default Modal;
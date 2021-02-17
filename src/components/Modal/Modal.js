import React from 'react';
import { ModalWindow } from "./Modal.style"

const Modal = () => {
    return (
        <ModalWindow>
            <div>
                <p>You loose, try again</p>
            </div>
            <button>New game</button>
        </ModalWindow>
    )
}

export default Modal;
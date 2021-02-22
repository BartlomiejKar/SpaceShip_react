import React from 'react';
import { Button, ModalWindow, Paragraph } from "./Modal.style"

const Modal = () => {
    return (
        <ModalWindow>
            <Paragraph>You loose, try again</Paragraph>
            <Button>New game</Button>
        </ModalWindow>
    )
}

export default Modal;
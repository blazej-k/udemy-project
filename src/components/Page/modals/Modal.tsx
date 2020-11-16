import React, { FC, FormEvent } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";


type ModalProps = {
    loginValue: string,
    passwordValue: string,
    showModal: boolean
    inputHandler: (e: FormEvent<HTMLInputElement>) => void,
    handleSignIn: () => void,
    toogleModal: () => void
}

const ModalElement: FC<ModalProps> = ({ loginValue, passwordValue, showModal, inputHandler, handleSignIn, toogleModal }) => {

    return (
        <Modal show={showModal} animation={false} onHide={toogleModal}>
            <Modal.Header closeButton={true}>
                <Modal.Title>Sign in!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>
                    Login:
                    <input type='text' value={loginValue} onChange={inputHandler}/>
                </label>
                <label>
                    Password:
                    <input type='password' value={passwordValue} onChange={inputHandler}/>
                </label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSignIn}>GO!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalElement;
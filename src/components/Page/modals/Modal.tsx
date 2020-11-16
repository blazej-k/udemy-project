import React, { FC, FormEvent } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";


type ModalProps = {
    loginValue: string,
    passwordValue: string,
    showModal: boolean,
    warning: string,
    inputHandler: (e: FormEvent<HTMLInputElement>) => void,
    handleSignIn: () => void,
    toogleModal: () => void
}

const ModalElement: FC<ModalProps> = ({ loginValue, passwordValue, showModal, inputHandler, handleSignIn, toogleModal, warning }) => {

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
                <div className='Modal-invalidFormValidate'>
                    {warning.length ? warning : null}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSignIn}>GO!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalElement;
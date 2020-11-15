import React, { FC, FormEvent } from 'react'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";

type ModalProps = {
    loginValue: string,
    passwordValue: string,
    showModal: boolean
    inputHandler: (e: FormEvent<HTMLInputElement>) => void,
    handleSignIn: () => void,
}


const ModalElement: FC<ModalProps> = ({ loginValue, passwordValue, showModal, inputHandler, handleSignIn }) => {

    const store = useSelector(store => store)
    console.log(store)

    return (
        <Modal show={showModal} animation={false}>
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
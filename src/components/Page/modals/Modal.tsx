import React, { FC, FormEvent, useEffect, useState } from 'react'
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

    // const modal = useRef<any>()
    // useEffect(() => {
    //     console.log(modal)
    //     if(isLogged){
    //         modal.current.modal('hide')
    //     }
    // }, [isLogged])
    return (
        <Modal show={showModal}>
            <Modal.Header closeButton={true}>
                <Modal.Title>Login Form</Modal.Title>
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
                <Button variant="primary">GO!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalElement;
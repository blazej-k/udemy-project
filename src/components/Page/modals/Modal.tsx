import React, { FC, FormEvent } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";


type ModalElementProps = {
    loginValue: string,
    passwordValue: string,
    isAdmin: boolean,
    showModal: boolean,
    warning: string,
    modalType: string,
    inputHandler: (e: FormEvent<HTMLInputElement>) => void,
    handleGoButton: () => void,
    toogleModal: (e: React.MouseEvent) => void
}

const ModalElement: FC<ModalElementProps> = ({
    loginValue,
    passwordValue,
    isAdmin,
    showModal,
    modalType,
    inputHandler,
    handleGoButton,
    toogleModal,
    warning
}) => {


    return (
        <Modal show={showModal} animation={false} onHide={toogleModal}>
            <Modal.Header closeButton={true}>
                {modalType === "signIn" ? <Modal.Title>Sign in!</Modal.Title> : <Modal.Title>Sign up!</Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                <label>
                    Login:
                    <input type='text' name='login' value={loginValue} onChange={inputHandler} />
                </label>
                <label>
                    Password:
                    <input type='password' name='password' value={passwordValue} onChange={inputHandler} />
                </label>
                {modalType === "signUp" && <><br /><label>
                    I'm admin:
                    <input type='checkbox' name='admin' checked={isAdmin} onChange={inputHandler} />
                </label></>}
                <div className='Modal-invalidFormValidate'>
                    {warning.length ? warning : null}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleGoButton}>GO!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalElement;
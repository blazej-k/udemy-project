import React, { FC, FormEvent } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import '../../../style/Modal.scss'
import Loader from 'react-loader-spinner'


type ModalElementProps = {
    loginValue: string,
    passwordValue: string,
    isAdmin: boolean,
    showModal: boolean,
    warning: string,
    modalType: string,
    showLoader: boolean,
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
    showLoader,
    inputHandler,
    handleGoButton,
    toogleModal,
    warning
}) => {

    return (
        <Modal show={showModal} animation={false} onHide={toogleModal} data-aos="fade-up">
            <Modal.Header closeButton={true}>
                {modalType === "signIn" ? <Modal.Title>Sign in!</Modal.Title> : <Modal.Title>Sign up!</Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                <div id='modal'>
                    <label>
                        Login:
                    <input type='text' name='login' value={loginValue} onChange={inputHandler} />
                    </label><br />
                    <label>
                        Password:
                    <input type='password' name='password' value={passwordValue} onChange={inputHandler} />
                    </label>
                    {modalType === "signUp" && <><br /><label>
                        <input type='checkbox' name='admin' checked={isAdmin} onChange={inputHandler} />
                        Admin
                    </label></>}
                    <div className='Modal-invalidFormValidate'>
                        {warning.length ? warning : null}
                    </div>
                    {!warning && showLoader && <div className='loader'><Loader
                        type="Oval"
                        color='#383ffe'
                        height={70}
                        width={70} />
                    </div>}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleGoButton}>GO!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalElement;
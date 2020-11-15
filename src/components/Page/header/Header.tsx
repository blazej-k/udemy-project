import React, { FC, FormEvent, useState } from 'react'
import ModalElement from '../modals/Modal'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../actions/UserActions'
import { Redirect } from 'react-router-dom'

const Header: FC = () => {

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isLogged, setIsLogged] = useState<boolean>(false)

    const dispatch = useDispatch()

    const handleSignIn = (): void => {
        dispatch(signIn({ login, password }))
        setShowModal(false)
        setIsLogged(true)
    }

    // const handleSignOut = (): void => {

    // }

    const toggleModal = () => {
        console.log('dfgdf')
        setShowModal((prev: boolean) => !prev)
    }

    const handleInput = (e: FormEvent<HTMLInputElement>): void => {
        if (e.currentTarget.type === 'text') {
            setLogin(e.currentTarget.value)
        }
        else {
            setPassword(e.currentTarget.value)
        }
    }
    return (
        <>
            <div onClick={toggleModal}>
                Zaloguj
            </div>
            Wyloguj
            <ModalElement
                loginValue={login}
                passwordValue={password}
                showModal={showModal}
                inputHandler={handleInput}
                handleSignIn={handleSignIn}
            />
            {isLogged && <Redirect to='/courses' />}
        </>
    );
}

export default Header;
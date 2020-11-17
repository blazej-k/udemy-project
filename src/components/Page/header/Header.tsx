import React, { FC, FormEvent, useEffect, useState } from 'react'
import ModalElement from '../modals/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from '../../../actions/UserActions'
import { Redirect } from 'react-router-dom'

const Header: FC = () => {

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [warning, setWarning] = useState<string>('')

    const store = useSelector((store: RootUserState) => store.userReducer)
    const dispatch = useDispatch()


    const cleanForm = () => {
        setLogin('')
        setPassword('')
    }

    useEffect(() => {
        if(store.error){
            setWarning(store.error)
        }
        if (store.isUserLogged) {
            cleanForm()
            setIsLogged(true)
            setShowModal(false)
        }
        else{ 
            setIsLogged(false)
        }
        return () => {
            setWarning('')
            cleanForm() 
        }
    }, [store])

    const handleSignIn = (): void => {
        dispatch(signIn({ login, password }))
    }

    const handleSignOut = (): void => {
        dispatch(signOut({}))
    }

    const toggleModal = () => {
        if(!store.isUserLogged){
            if(showModal === true){
                setWarning('')
            }
            setShowModal((prev: boolean) => !prev)
        }
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
            {isLogged ? <><div onClick={handleSignOut}>Wyloguj</div><h3>{store.login}</h3></> : <div onClick={toggleModal}>Zaloguj</div>}
            <ModalElement
                loginValue={login}
                passwordValue={password}
                showModal={showModal}
                inputHandler={handleInput}
                handleSignIn={handleSignIn}
                toogleModal={toggleModal}
                warning={warning}
            />
            {isLogged && <Redirect to='/courses' />}
        </>
    );
}

export default Header;
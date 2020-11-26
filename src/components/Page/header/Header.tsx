import React, { FC, FormEvent, useEffect, useState } from 'react'
import ModalElement from '../modals/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut, signUp } from '../../../actions/UserActions'
import { Redirect } from 'react-router-dom'

const Header: FC = () => {

    const [formLogin, setFormLogin] = useState<string>('')
    const [userLogin, setUserLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalType, setModalType] = useState<string>('')
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [isAdminInForm, setIsAdminInForm] = useState<boolean>(false)
    const [isUserAdmin, setIsUserAdmin] = useState<boolean>(false)
    const [warning, setWarning] = useState<string>('')

    const dispatch = useDispatch()
    const store: User = useSelector((store: RootUserState) => store.userReducer)

    const cleanForm = () => {
        setFormLogin('')
        setPassword('')
        setIsAdminInForm(false)
        setWarning('')
    }
    const cleanUserInfo = () =>{
        setUserLogin('')
        setIsUserAdmin(false)
        setIsLogged(false)
    }


    useEffect(() => {
        Promise.resolve(store).then((store) => {
            if(store.login){
                setUserLogin(store.login)
            }
            if(store.isAdmin){
                setIsUserAdmin(store.isAdmin)
            }
            if (store.error) {
                setWarning(store.error)
            }
            if (store.isUserLogged) {
                cleanForm() 
                setIsLogged(true)
                setShowModal(false)
            }
            else {
                cleanUserInfo()
            }
        })
        return () => {
            cleanForm()
            cleanUserInfo()
        }
    }, [store])

    const handleSignIn = (): void => {
        dispatch(signIn({ login: formLogin, password }))
    }

    const handleSignUp = (): void => {
        if(formLogin.length < 5 || password.length < 8){
            setWarning('Password or login too short')
            return 
        }
        dispatch(signUp({ login: formLogin, password, isAdmin: isAdminInForm }))
    }

    const handleSignOut = (): void => {
        dispatch(signOut({}))
    }  

    const toggleModal = (e: React.MouseEvent): void => {
        if(showModal === false){
            setModalType(e.currentTarget.className)
        }
        if (!isLogged) {
            if (showModal === true) {
                setWarning('')
                setModalType('') 
            }
            setShowModal((prev: boolean) => !prev)
        }
    }

    const handleInput = (e: FormEvent<HTMLInputElement>): void => {
        if (e.currentTarget.name === 'login') {
            setFormLogin(e.currentTarget.value)
        }
        else if(e.currentTarget.name === 'password'){
            setPassword(e.currentTarget.value)
        }
        else{
            setIsAdminInForm(e.currentTarget.checked)
        }
    }

    const handleGoButton = (): void => {
        if(modalType === 'signIn'){
            return handleSignIn()
        }
        else{
            return handleSignUp()
        }
    }
    
    return (
        <>
            {isLogged ? <><div onClick={handleSignOut}>Wyloguj</div><h3>{userLogin}</h3>{isUserAdmin && <h3>(A)</h3>}</> :
                <>
                    <div
                    onClick={toggleModal}
                    className='signIn'>Zaloguj</div>
                    <div 
                    className='signUp' 
                    onClick={toggleModal}>Zarejestruj</div>
                </>
            }
            <ModalElement
                loginValue={formLogin}
                passwordValue={password}
                isAdmin={isAdminInForm}
                showModal={showModal}
                inputHandler={handleInput}
                handleGoButton={handleGoButton}
                toogleModal={toggleModal}
                warning={warning}
                modalType={modalType}
            />
        </>
    ); 
}

export default Header;
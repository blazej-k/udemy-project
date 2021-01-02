import React, { FC, FormEvent, useEffect, useState } from 'react'
import ModalElement from '../modals/AccountModal'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut, signUp } from '../../../actions/UserActions'
import '../../../style/Header.scss'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'

const Header: FC = () => {

    const [formLogin, setFormLogin] = useState<string>(''),
        [userLogin, setUserLogin] = useState<string>(''),
        [password, setPassword] = useState<string>(''),
        [showModal, setShowModal] = useState<boolean>(false),
        [modalType, setModalType] = useState<string>(''),
        [isLogged, setIsLogged] = useState<boolean>(false),
        [isAdminInForm, setIsAdminInForm] = useState<boolean>(false),
        [isUserAdmin, setIsUserAdmin] = useState<boolean>(false),
        [warning, setWarning] = useState<string>(''),
        [id, setId] = useState<string>(),
        [backToHome, setBackToHome] = useState<boolean>(false),
        [subscribe, setSubscribe] = useState<boolean>(true),
        [showLoader, setShowLoader] = useState<boolean>(false)

    const dispatch = useDispatch()
    const userStore = useSelector((store: RootState) => store.userReducer)

    const cleanForm = () => {
        setFormLogin('')
        setPassword('')
        setIsAdminInForm(false)
        setWarning('')
    }
    const cleanUserInfo = () => {
        setUserLogin('')
        setIsUserAdmin(false)
        setIsLogged(false)
    }


    useEffect(() => {
        if (subscribe) {
            const localStorage = window.localStorage.getItem('store')
            setWarning(userStore.error)
            if (localStorage !== null) {
                const store: User = JSON.parse(localStorage)
                setUserLogin(store.login || '')
                setIsUserAdmin(store.isAdmin || false)
                setIsLogged(store.isUserLogged || false)
                setId(store._id)
                store?.isUserLogged && setShowModal(false)
            }
        }
        return () => {
            cleanForm()
            cleanUserInfo()
            setBackToHome(false)
        }
    }, [userStore])

    useEffect(() => {
        return () => {
            setSubscribe(false)
        }
    }, [])

    const handleSignIn = (): void => {
        if (subscribe) {
            dispatch(signIn({ login: formLogin, password }))
        }
    }

    const handleSignUp = (): void => {
        let isLoginCorrect = false, isPasswordCorrect = false
        const firstLetterOfFormLogin = formLogin.charAt(0), lastLetterOfFormLogin = formLogin.slice(-1)
        if (formLogin.length < 5 || password.length < 8) {
            setWarning('Password or login too short')
            return
        }
        else if (firstLetterOfFormLogin === " " || lastLetterOfFormLogin === " ") {
            setWarning("Login can't start and end with space")
            return
        }
        else if (formLogin.length > 15 || password.length > 25) {
            setWarning("Login can has 15 leters and password 25")
            return
        }
        formLogin.split('').map<boolean | null>(letter => {
            if (letter !== ' ') {
                return isLoginCorrect = true
            }
            return null
        })
        password.split('').map<boolean | null>(letter => {
            if (letter !== ' ') {
                return isPasswordCorrect = true
            }
            return null
        })
        isLoginCorrect && isPasswordCorrect ? dispatch(signUp({ login: formLogin, password, isAdmin: isAdminInForm }))
            : setWarning('Login or password have to have one letter')

    }

    const handleSignOut = (): void => {
        id && dispatch(signOut(id))
        setBackToHome(true)
        window.scrollTo(0, 0)
    }

    const toggleModal = (e: React.MouseEvent): void => {
        setShowLoader(false)
        if (showModal === false) {
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
        else if (e.currentTarget.name === 'password') {
            setPassword(e.currentTarget.value)
        }
        else {
            setIsAdminInForm(e.currentTarget.checked)
        }
    }

    const handleGoButton = (): void => {
        setShowLoader(true)
        if (modalType === 'signIn') {
            return handleSignIn()
        }
        else {
            return handleSignUp()
        }
    }

    const values = {
        loginValue: formLogin,
        passwordValue: password,
        isAdmin: isAdminInForm,
        showModal: showModal,
        warning: warning,
        modalType: modalType,
        showLoader: showLoader,
    }

    return (
        <>
            {backToHome && <Redirect to='/' />}
            <div className="Header">
                <div className='Logo'>
                    <Logo />
                </div>
                <div className="client-actions">
                    <br />
                    {isLogged && <span><b>{userLogin}{isUserAdmin && <>(A)</>}</b></span>}
                    <Nav subscribe={subscribe} />
                    {isLogged ? <><button onClick={handleSignOut}>Log Out</button></> :
                        <>
                            <button
                                onClick={toggleModal}
                                className='signIn'>Sign In
                        </button>
                            <button
                                className='signUp'
                                onClick={toggleModal}>Sign Up
                        </button>
                        </>
                    }
                </div>
            </div>
            <ModalElement
                values={values}
                inputHandler={handleInput}
                handleGoButton={handleGoButton}
                toogleModal={toggleModal}
            />
        </>
    );
}

export default Header;
import React, {FC, FormEvent, useEffect, useState } from 'react'
import ModalElement from '../modals/AccountModal'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut, signUp } from '../../../actions/UserActions'
import '../../../style/Header.scss'
import Nav from './Nav'

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
        [id, setId] = useState<string>()

    const dispatch = useDispatch()
    const store: User = useSelector((store: RootState) => store.userReducer)

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
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const store: User = JSON.parse(localStorage)
            setUserLogin(store.login || '')
            setIsUserAdmin(store.isAdmin || false)
            setIsLogged(store.isUserLogged || false)
            setId(store._id)
        }
        else {
            Promise.resolve(store).then((store) => {
                if (store.login) {
                    window.localStorage.setItem('store', JSON.stringify(store))
                    setUserLogin(store.login)
                    setId(store._id)
                }
                if (store.isAdmin) {
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
        }
        return () => {
            cleanForm()
            cleanUserInfo()
        }
    }, [store])

    const handleSignIn = (): void => {
        dispatch(signIn({ login: formLogin, password }))
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
        window.localStorage.removeItem('store')
    }

    const toggleModal = (e: React.MouseEvent): void => {
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
        if (modalType === 'signIn') {
            return handleSignIn()
        }
        else {
            return handleSignUp()
        }
    }

    return (
        <> 
            <div className="Header">
                <div className='Logo'>
                    <Logo />
                </div>
                <div className="client-actions">
                    <br />
                    {isLogged && <span><b>{userLogin}{isUserAdmin && <>(A)</>}</b></span>}
                    <Nav />
                    {isLogged ? <><button onClick={handleSignOut}>Wyloguj</button></> :
                        <>
                            <button
                                onClick={toggleModal}
                                className='signIn'>Zaloguj
                        </button>
                            <button
                                className='signUp'
                                onClick={toggleModal}>Zarejestruj
                        </button>
                        </>
                    }
                </div>
            </div>
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
import React from 'react'
import {useDispatch} from 'react-redux'

const Header = () => {

    const dispatch = useDispatch()

    const handleSignIn = (): void => {
        
    }

    const handleSignOut = (): void => {
        
    }
    return (
        <>
            <div>Zaloguj</div>
            <div>Wyloguj</div>
        </>
    );
}

export default Header;
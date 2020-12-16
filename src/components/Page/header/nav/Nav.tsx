import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { CgPlayListCheck } from "react-icons/cg";
import { BiListPlus } from "react-icons/bi";
import { RiContactsLine } from 'react-icons/ri'
import { MdContactPhone } from 'react-icons/md'
import '../../../../style/Nav.scss'

const Nav: FC = () => {

    const store = useSelector((store: RootState) => store.userReducer)
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [navWidth, setNavWidth] = useState<string>('0%')

    const nav = useRef<HTMLDivElement>(null)

    const closeNav = (e: ChangeEvent<HTMLDivElement>) => {
        const {className} = e.target
        if(className === 'Nav-open-button' || className === 'Nav-open-list' || className === 'Nav-list-ul') return
        className !== 'Nav-list' && navWidth === '30%' && toogleNav()
    }

    useEffect(() => {
        const localStorage = window.localStorage.getItem('store')
        if (localStorage !== null) {
            const store: User = JSON.parse(localStorage)
            setIsAdmin(store.isAdmin || false)
        }
        else {
            Promise.resolve(store).then(store => {
                if (store.isAdmin) {
                    setIsAdmin(true)
                }
                else {
                    setIsAdmin(false)
                }
            })
        }
    }, [store])

    useEffect(() => {
        document.addEventListener<any>('click', (e: ChangeEvent<HTMLDivElement>): void => closeNav(e))
        return () => {
            document.removeEventListener<any>('click', (e: ChangeEvent<HTMLDivElement>) => closeNav(e))
        }
    }, [navWidth])

    const toogleNav = (): void => {
        if(navWidth === '0%'){
            setNavWidth('30%')
            return
        }
        setNavWidth('0%')
    }

    return (
        <>
        <button onClick={toogleNav} className="Nav-open-button">Menu</button>
        <div className="Nav-list" style={{"width": navWidth}} ref={nav}>
            <ul className='Nav-list-ul'>
                <li>
                    <NavLink to='/' exact onClick={toogleNav}><AiFillHome/></NavLink>
                </li>
                <li>
                    <NavLink to='/courses' exact onClick={toogleNav}><BiListPlus style={{fontSize: '120%'}}/>Buy course</NavLink>
                </li>
                <li>
                    <NavLink to='/myCourses' exact onClick={toogleNav}><CgPlayListCheck style={{fontSize: '120%'}}/>My courses</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' exact onClick={toogleNav}><MdContactPhone/><span>Contact</span></NavLink>
                    </li>
                {isAdmin && <li>
                    <NavLink to='/admin' exact onClick={toogleNav}><RiContactsLine style={{fontSize: '90%'}}/><span>Admin</span></NavLink>
                </li>}
            </ul>
        </div>
        </>
    );
}

export default Nav;
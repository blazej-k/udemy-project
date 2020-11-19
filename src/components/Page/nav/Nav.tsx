import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
 
const Nav: FC = () => {

    const {isAdmin} = useSelector((store: RootUserState) => store.userReducer)

    return (
        <div className="Nav">
            <ul>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/courses' exact>Buy courses</NavLink>
                <NavLink to='/myCourses' exact>My Courses</NavLink>
                <NavLink to='/contact' exact>Contact</NavLink>
                {isAdmin && <NavLink to='/admin' exact>Admin</NavLink>}
            </ul>
        </div>
    );
}
 
export default Nav;
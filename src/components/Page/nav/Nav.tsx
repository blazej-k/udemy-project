import React, { FC } from 'react'
import {NavLink} from 'react-router-dom'
 
const Nav: FC = () => {
    return (
        <div className="Nav">
            <ul>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/courses' exact>Buy courses</NavLink>
                <NavLink to='/myCourses' exact>My Courses</NavLink>
                <NavLink to='/contact' exact>Contact</NavLink>
            </ul>
        </div>
    );
}
 
export default Nav;
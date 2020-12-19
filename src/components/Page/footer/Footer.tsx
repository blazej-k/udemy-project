import React, { FC } from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import '../../../style/Footer.scss'

const Footer: FC = () => {
    return (
        <div id='footer'>
            <div className='pages'>
                <h3>Links:</h3>
                <ul>
                    <li>
                        <NavLink to='/' exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses' exact>Buy course</NavLink>
                    </li>
                    <li>
                        <NavLink to='/myCourses' exact>My courses</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' exact>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/job' exact>Work with us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/regulations' exact>Regulations</NavLink>
                    </li>
                </ul>
            </div>
            <div className='contact'>
                <h3>Contact in:</h3>
                <ul>
                    <li>Warszawa, ul.Piłsudskiego 25a,</li>
                    <li>tel: 434-654-254</li>
                    <li>e-mail: contact@udemy.com</li>
                    <li id='social-media'><AiFillFacebook /><FiInstagram /><AiOutlineTwitter /></li>
                </ul>
            </div>
            <div className="authors">
                <h3>This page was made by:</h3>
                <ul>
                    <li>UdemyGroupIT</li>
                    <li>TechWeb</li>
                    <li>Star Servers</li>
                </ul>
            </div><br />
            <div className="copyright">
                UdemyGroup <BiCopyright style={{ fontSize: '70%' }} /> {new Date().getFullYear()} all rights reserved
            </div>
        </div>
    );
}

export default Footer;
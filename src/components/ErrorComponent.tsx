import React, { FC } from 'react';
import { FiAlertCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import logo from '../assets/images/udemy-logo.png'
import '../style/ErrorPage.scss'

const ErrorComponent: FC = () => {
    return (
        <div className="Error-page">
            <div className="Error-header">
              <img src={logo} alt="logo"/>  
            </div>
            <div className="Error-content">
                <h1>Sorry, we can't find this page</h1>
                <FiAlertCircle style={{ fontSize: '250%' }}/>
                <div className='info'>Please click <Link to='/'>here</Link> to home page</div>
            </div>
        </div>
    );
}
 
export default ErrorComponent;
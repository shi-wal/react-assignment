import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';

const Header=()=>{
        const history = useHistory();
        const homehandleClick = () => history.push('/');
        const abouthandleClick = () => history.push('/about');
        const servicehandleClick = () => history.push('/service');
        const contacthandleClick = () => history.push('/contact');
        return(
            <div className="header">
                <ul className="nav-items">
                    <li onClick={homehandleClick}>Home</li>
                    <li onClick={abouthandleClick}>About</li>
                    <li onClick={servicehandleClick}>Service</li>
                    <li onClick={contacthandleClick}>Contact</li>
                </ul>

            </div>
        );
    }


export default Header;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
       showButton();
    }, []);



    return (
        <IconContext.Provider value={{ color: '#000' }}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <MdFingerprint className="navbar-icon"/>
                    Huynh Tan
                    </Link>
                <div className="menu-icon" onClick={handleClick}>
                    { click ? <FaTimes/> : <FaBars/> }
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle="btn--outline" buttonColor='blue'>
                                    POST A JOB</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline"
                                buttonSize="btn-mobile">
                                    POST A JOB
                                    </Button>
                            </Link>
                        )}
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle="btn--outline"buttonColor='red'>
                                    SIGN UP</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline"
                                buttonSize="btn-mobile">
                                    SIGN UP
                                    </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        <svg viewBox="0 0 1440 120" class="wave"><path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg>
        </IconContext.Provider>
        
    )
}

export default Navbar

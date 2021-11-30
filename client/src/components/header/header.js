import './header.css';

import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../img/header/turners-logo.png';
import phone_icon from '../../img/header/phone-icon.png';

const Header = () => {

    const [open, setOpen] = useState(false);

    const menuHover = (bool) => {
        bool ? setOpen(true) : setOpen(false);
    }

    useEffect(() => {
        console.log(open)
    }, [open])

    return (
        <div className = 'header-container'>

                <div className = 'header-top-bar'>
                    <div className = 'header-top-bar-content'>
                        <img src = { phone_icon } className = 'phone-img' alt = 'phone' />
                        <p className = 'phone-text'>0800 887 637</p>
                        <p className = 'en-lang'>EN</p>
                        <p className = 'china-lang'>中文</p>
                    </div>
                </div>

                <div className = 'header-wrapper'>
                    <div className = 'header-left'>
                        <NavLink to = '/'>
                            <img src = { logo } className = 'turners-logo' alt = 'turners' />
                        </NavLink>
                        
                        <NavLink to = '#' className = 'menu-link'>
                            <h5 className = 'menu-text'>Buy</h5>
                        </NavLink>

                        <NavLink to = '#' className = 'menu-link'>
                            <h5 className = 'menu-text'>Sell</h5>
                        </NavLink>

                        <div to = '/insurance.js' className = 'menu-link'>
                            <div className = 'menu-insurance-wrap'
                                onMouseEnter = {() => menuHover(true)}
                                onMouseLeave = {() => menuHover(false)}>
                                    <h5 className = 'car-menu-text'>Car Insurance</h5>
                                    {
                                        open ?
                                            <>
                                                <div className = 'insurance-menu-cn'>
                                                    <NavLink to = '/getQuote.js' className = 'ai-link'>
                                                        <p className = 'ins-menu-text' id = 'auto-ins'>Auto Insurance</p>
                                                    </NavLink>
                                                    <p className = 'ins-menu-text'>Mechanical Breakdown Insurance</p>
                                                </div>
                                            </>
                                        : <></>
                                    }
                            </div>
                        </div>
                        
                        <NavLink to = '/getQuote.js' className = 'menu-link'>
                            <h5 className = 'menu-text'>Finance</h5>
                        </NavLink>
                    </div>

                    <div className = 'header-right'>
                        <input type = 'button' className = 'log_reg-btn'
                            id = 'log-btn' value = 'Login' />
                        <input type = 'button' className = 'log_reg-btn'
                            id = 'reg-btn' value = 'Register' />
                        <h3 className = 'china_lang'>中文</h3>
                    </div>
                </div>



        </div>
    )
}

export default Header;
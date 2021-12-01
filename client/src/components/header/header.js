import './header.css';
import '../../pages/quote/quoteCSS/buyOnline.css';

import { NavLink, useHistory } from 'react-router-dom';
import { Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import logo from '../../img/header/turners-logo.png';
import phone_icon from '../../img/header/phone-icon.png';
import axios from 'axios';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const history = useHistory();

    const menuHover = (bool) => {
        bool ? setOpen(true) : setOpen(false);
    }

    useEffect(() => {
        console.log(open)
    }, [open])


    const handleLogin = () => {
        const loginObj = {
            email : userEmail,
            password: userPass
        }

        axios.post('http://localhost:4000/login', loginObj)
        .then (response => {
            if (response.status === 201) {
                console.log('login successful');
                history.push('/thanks.js');
                window.location.reload(false);
            }
        })
        .catch (err => {
            console.log(err);
            console.log('unsuccessful login')
            document.getElementById('login-err').innerHTML = 'Authentication failed !';
        })
    }

    const handleClose = () => {
        setModalOpen(false);
    }


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
                            id = 'log-btn' value = 'Login' onClick = { () => setModalOpen(true) }/>
                        <input type = 'button' className = 'log_reg-btn'
                            id = 'reg-btn' value = 'Register' />
                        <h3 className = 'china_lang'>中文</h3>
                    </div>
                </div>

                <Modal className = 'login-modal' open = {modalOpen} onClose = {() => handleClose()} >
                <div className = 'acc-container'>

                <h4 className = 'modal-title-main'>
                    How would you like to continue today?
                </h4>

                <div className = 'modal-input-container'>

                    <div className = 'guest-wrapper'>
                        <h5 className = 'modal-title'>Continue as Guest</h5>
                        <p className = 'modal-caption'>Where should we email your receipt?</p>

                        <h5 className = 'modal-title-em'>Email</h5>
                        <input type = 'text' placeholder = 'Enter your email'
                            className = 'modal-text-input' />

                        <div className = 'check-text-pair'>
                            <input type = 'checkbox' className = 'modal-checkbox' />
                            <p className = 'modal-check-text'>
                                Register for faster checkout and online account management.
                            </p>
                        </div>

                        <div className = 'temp-guest'>
                            {
                                (userEmail !== '') ?
                                    <>
                                            <input type = 'button' className = 'cont-acc-btn'
                                                value = 'Continue as Guest' />
                                    </> : 
                                    <>
                                        <input type = 'button' className = 'cont-acc-btn'
                                            value = 'Continue as Guest'
                                            style = {{backgroundColor: '#939393'}} />
                                    </>
                            }

                            

                        </div>

                    </div>

                        <div className = 'login-wrapper'>

                            <h5 className = 'modal-title'>Login</h5>
                            <p className = 'modal-caption'>Login to checkout faster</p>

                            <h5 className = 'modal-title-em'>Email</h5>
                            <input type = 'text' placeholder = 'Enter your email' onChange = {(e) => setUserEmail(e.target.value)}
                                className = 'modal-text-input' value = {userEmail} />

                            <div className = 'ps-wrap'>
                                <h5 className = 'modal-title'>Password</h5>
                                <p className = 'fg-pass'>Forgot password?</p>
                            </div>
                            <input type = 'password' placeholder = 'Enter your password' onChange = {(e) => setUserPass(e.target.value)}
                                className = 'modal-text-input' value = {userPass} />
                            
                            
                            <div className = 'check-text-pair'>
                                <input type = 'checkbox' className = 'modal-checkbox' />
                                <p className = 'modal-check-text'>Keep me logged in</p>
                            </div>

                            <p className = 'modal-caption' id = 'login-err'></p>

                            <div className = 'temp'>

                                {
                                    (userEmail !== '')
                                    && (userPass !== '') ?
                                        <>
                                                <input type = 'button' className = 'cont-acc-btn'
                                                    value = 'Continue as Member' onClick = {() => handleLogin()} />
                                        </> :
                                        <>
                                            <input type = 'button' className = 'cont-acc-btn'
                                                value = 'Continue as Member'
                                                style = {{backgroundColor: '#939393'}} />
                                        </>
                                }


                            </div>
                        </div>
                    </div>


                </div>
            </Modal>



        </div>
    )
}

export default Header;
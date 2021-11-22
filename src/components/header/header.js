import './header.css';
import { angryReact } from '../../functions/angryReact';

import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/turners-logo.png';

const Header = () => {

    return (
        <div className = 'header-wrapper'>

            <div className = 'header-left'>
                <Link to = '/'>
                    <img src = { logo } className = 'turners-logo' />
                </Link>
                
                <NavLink to = '#' className = 'menu-link'>
                    <h5 className = 'menu-text'
                    onClick = { () => angryReact() }>Buy</h5>
                </NavLink>

                <NavLink to = '#' className = 'menu-link'>
                    <h5 className = 'menu-text'
                    onClick = { () => angryReact() }>Sell</h5>
                </NavLink>

                <NavLink to = '/insurance.js' className = 'menu-link'>
                    <h5 className = 'menu-text'>Insurance</h5>
                </NavLink>
                
                <NavLink to = '#' className = 'menu-link'>
                    <h5 className = 'menu-text'
                    onClick = { () => angryReact() }>Finance</h5>
                </NavLink>
            </div>

            <div className = 'header-right'>
                <input type = 'button' className = 'log_reg-btn'
                    id = 'log-btn' value = 'Login' onClick = { () => angryReact() }/>
                <input type = 'button' className = 'log_reg-btn'
                    id = 'reg-btn' value = 'Register' onClick = { () => angryReact() }/>
                <h3 className = 'china_lang'>中文</h3>
            </div>
            
        </div>
    )
}

export default Header;
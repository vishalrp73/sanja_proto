import './stepper.css';

import { NavLink } from 'react-router-dom';

import bar from '../../img/quote/stepper-bar.png';

const Stepper = () => {
    return (
        <div className = 'stepper-wrapper'>

            <NavLink to = '/getQuote.js'
                className = 'stepper-box' activeClassName = 'active-text'>
                <p className = 'stepper-text'>
                    Cover Details</p>
            </NavLink>

            <img src = { bar } className = 'stepper-bar-img' alt = 'stepper-bar' />

            <NavLink to = '/yourQuote.js'
                className = 'stepper-box' activeClassName = 'active-text'>
                <p className = 'stepper-text'>Your Quote</p>
            </NavLink>

            <img src = { bar } className = 'stepper-bar-img' alt = 'stepper-bar' />

            <NavLink to = '/buyOnline.js'
                className = 'stepper-box' activeClassName = 'active-text'>
                <p className = 'stepper-text'>Buy Online</p>
            </NavLink>
            
        </div>
    )
}

export default Stepper;
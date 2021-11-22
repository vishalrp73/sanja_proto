import './stepper.css';

import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Details from '../quoteProcess/details';
import YourQuote from '../quoteProcess/yourQuote';
import BuyQuote from '../quoteProcess/buyQuote';

const Stepper = () => {

    return (
        <div className = 'stepper-wrapper'>

            <a href = '/quote.js' className = 'stepper-nav-link'>
                <h5 className = 'stepper-text'>Cover Details</h5>
            </a>

            <a href = '/yourQuote.js' className = 'stepper-nav-link'>
                <h5 className = 'stepper-text'>Your Quote</h5>
            </a>

            <a href = '/buyQuote.js' className = 'stepper-nav-link' activeClassName = 'activo'>
                <h5 className = 'stepper-text'>Buy Online</h5>
            </a>

            <Routes>
                <Route exact path = '/quote.js' />
                <Route exact path = '/yourQuote.js' element = { <YourQuote />} />
                <Route exact path = '/buyQuote.js' element = { <BuyQuote /> } />
            </Routes>


        </div>
    )

}

export default Stepper;
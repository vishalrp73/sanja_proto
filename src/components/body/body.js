import './body.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';

import Home from '../../pages/home';
import Insurance from '../../pages/insurance';
import Quote from '../../pages/quote';

import Details from '../quoteProcess/details';
import YourQuote from '../quoteProcess/yourQuote';
import BuyQuote from '../quoteProcess/buyQuote';

const Body = () => {
    return (
        <div className = 'body-wrapper'>
            
            <Router>

            <Header />

            <div className = 'core-body-wrapper'>
                <Routes>

                    <Route exact path = '/' element = { <Home /> } />
                    <Route exact path = '/insurance.js' element = { <Insurance /> } />
                    <Route exact path = '/quote.js' element = { <Quote /> } />

                    <Route exact path = '/quote.js' element = { <Quote /> } />
                    <Route exact path = '/yourQuote.js' element = { <YourQuote /> } />
                    <Route exact path = '/buyQuote.js' element = { <BuyQuote /> } />
                </Routes>
            </div>

            
                <Footer />
            </Router>
        </div>
    )
}

export default Body;
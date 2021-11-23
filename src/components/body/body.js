import './body.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import Chatbot from '../chatbot/chatbot';

import Home from '../../pages/home';
import Insurance from '../../pages/insurance';
import Quote from '../../pages/quote';

import Details from '../quoteProcess/details';
import YourQuote from '../quoteProcess/yourQuote';
import BuyQuote from '../quoteProcess/buyQuote';

import Success from '../../pages/success';

const Body = () => {
    return (
        <div className = 'body-wrapper'>
            
            <Router>

            <Header />

            <Chatbot />

            <div className = 'core-body-wrapper'>
                <Routes>

                    <Route exact path = '/' element = { <Home /> } />
                    <Route exact path = '/insurance.js' element = { <Insurance /> } />
                    <Route exact path = '/quote.js' element = { <Quote /> } />

                    <Route exact path = '/quote.js' element = { <Quote /> } />
                    <Route exact path = '/yourQuote.js' element = { <YourQuote /> } />
                    <Route exact path = '/buyQuote.js' element = { <BuyQuote /> } />

                    <Route exact path = '/success.js' element = { <Success /> } />
                </Routes>
            </div>

            
                <Footer />
            </Router>
        </div>
    )
}

export default Body;
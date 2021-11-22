import { Link, Routes, Route } from 'react-router-dom';
import Details from '../components/quoteProcess/details';
import YourQuote from '../components/quoteProcess/yourQuote';


import './pageCSS/quote.css';


const Quote = () => {
    return (
        <div className = 'quote-core-wrapper'>
    
            <YourQuote />

        </div>
    )
}

export default Quote;
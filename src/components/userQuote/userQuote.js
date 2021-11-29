import './userQuote.css';
import { useState, useEffect } from 'react';

import QuoteSelect from '../quoteSelectPanel/quoteSelect';


const UserQuote = (props) => {

    const [period, setPeriod] = useState('Annually');
    const [priceHike, setPriceHike] = useState(props.priceHike);

    const changePeriod = (e) => {
        const an_btn = document.getElementById('an-btn');
        const mon_btn = document.getElementById('mon-btn');
        const fort_btn = document.getElementById('fort-btn');
        setPeriod(e);
        if (e === 'Annually') {
            an_btn.classList.add('quote-choose-btn-active');
            mon_btn.classList.remove('quote-choose-btn-active');
            fort_btn.classList.remove('quote-choose-btn-active');
        } else if (e === 'Monthly') {
            an_btn.classList.remove('quote-choose-btn-active');
            mon_btn.classList.add('quote-choose-btn-active');
            fort_btn.classList.remove('quote-choose-btn-active');
        } else if (e === 'Fortnightly') {
            an_btn.classList.remove('quote-choose-btn-active');
            mon_btn.classList.remove('quote-choose-btn-active');
            fort_btn.classList.add('quote-choose-btn-active');
        }
    }


    useEffect(() => {
        console.log(period);
        localStorage.setItem('payment_period', period);
    }, [period])

    useEffect(() => {
        setPriceHike(props.priceHike);
    }, [props.priceHike])

    return (
        <div className = 'user-quote-wrapper'>
            
            <div className = 'quote-choose-wrap'>
                <input type = 'button' value = 'Annually' onClick = {(e) => changePeriod(e.target.value)}
                    className = 'quote-choose-btn quote-choose-btn-active' id = 'an-btn' />
                <input type = 'button' value = 'Monthly' onClick = {(e) => changePeriod(e.target.value)}
                    className = 'quote-choose-btn' id = 'mon-btn' />
                <input type = 'button' value = 'Fortnightly' onClick = {(e) => changePeriod(e.target.value)}
                    className = 'quote-choose-btn' id = 'fort-btn' />
            </div>

            <div className = 'quote-select-wrap'>
                <QuoteSelect
                    quoteId = 'comp'
                    policy = 'Comprehensive'
                    rec = {true}
                    title = 'Comprehensive Everyday Plus'
                    period = {period} priceHike = {priceHike}
                    discount = {50} />
                
                <QuoteSelect
                    quoteId = 'tpp'
                    policy = 'Third Party Property'
                    title = 'Third Party Property Damage'
                    period = {period} priceHike = {priceHike}
                    discount = {40} />

                <QuoteSelect
                    quoteId = 'tft'
                    policy = 'Third Party Fire and Theft'
                    title = 'Third Party Fire and Theft Damage'
                    period = {period} priceHike = {priceHike}
                    discount = {30} />

            </div>


        </div>
    )
}

export default UserQuote;
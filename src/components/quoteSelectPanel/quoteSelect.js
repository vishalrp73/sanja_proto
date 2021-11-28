import './quoteSelect.css';
import { useState, useEffect } from 'react';
import tick from '../../img/quote/tick.png';

import {Link} from 'react-router-dom';

const QuoteSelect = (props) => {

    const [learn, setLearn] = useState(false);
    const [policy, setPolicy] = useState(props.policy);
    const [period, setPeriod] = useState(props.period);
    const [priceHike, setPriceHike] = useState(props.priceHike);
    const [price, setPrice] = useState('$0');

    const showLearn = () => {
        !learn ? setLearn(true) : setLearn(false);
    }

    const proceedBuy = (policy) => {
        localStorage.setItem('policy', policy);
    }


    useEffect(() => {
        setPeriod(props.period);
    }, [props.period])


    const calcPrice = () => {

        const genNum = (max, min) => {
            let randNum = Math.floor(Math.random() * max - min + min)
            return randNum;
        }

        if (policy === 'Comprehensive') {
            if (period === 'Annually') {
                const randNum = genNum(1000, 500);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            } else if (period === 'Monthly') {
                const randNum = genNum(85, 40);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            } else if (period === 'Fortnightly') {
                const randNum = genNum(20, 10);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            }
        } else if (policy === 'Third Party Property') {
            if (period === 'Annually') {
                const randNum = genNum(500, 200);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            } else if (period === 'Monthly') {
                const randNum = genNum(40, 15);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            } else if (period === 'Fortnightly') {
                const randNum = genNum(10, 4);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            }
        } else if (policy === 'Third Party Fire and Theft') {
            if (period === 'Annually') {
                const randNum = genNum(200, 50);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            } else if (period === 'Monthly') {
                const randNum = genNum(15, 5);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            } else if (period === 'Fortnightly') {
                const randNum = genNum(4, 1);
                priceHike ? setPrice(`$${randNum + 100}`) : setPrice(`$${randNum}`);
                localStorage.setItem('policy-price', price);
            }
        }

    }

    useEffect(() => {
        calcPrice();
    }, [props.period]);

    const selectQuote = (quoteId) => {
        document.getElementById(`pn-${quoteId}`).classList.add('select-quote-panel');
        console.log(quoteId);

        if (quoteId === 'comp') {
            document.getElementById('pn-comp').classList.add('select-quote-panel');
            document.getElementById('pn-tpp').classList.remove('select-quote-panel');
            document.getElementById('pn-tft').classList.remove('select-quote-panel');
            localStorage.setItem('policy', 'Comprehensive');
            localStorage.setItem('policy-price', price);
        } else if (quoteId === 'tpp') {
            document.getElementById('pn-comp').classList.remove('select-quote-panel');
            document.getElementById('pn-tpp').classList.add('select-quote-panel');
            document.getElementById('pn-tft').classList.remove('select-quote-panel');
            localStorage.setItem('policy', 'Third Party Property Damage');
            localStorage.setItem('policy-price', price);
        } else if (quoteId === 'tft') {
            document.getElementById('pn-comp').classList.remove('select-quote-panel');
            document.getElementById('pn-tpp').classList.remove('select-quote-panel');
            document.getElementById('pn-tft').classList.add('select-quote-panel');
            localStorage.setItem('policy', 'Third Party Fire and Theft');
            localStorage.setItem('policy-price', price);
        }
    }



    return (
        <div className = 'quote-select-panel' id = {props.rec ? 'rec_panel' : ''} 
            id = {`pn-${props.quoteId}`}
            onClick = {() => selectQuote(props.quoteId)}>
            {
                props.rec ?
                    <>
                        <div className = 'quote-rec-bar'>
                            <h2 className = 'quote-rec-text'>Recommended</h2>
                        </div>
                    </> : <></>
            }
            <h2 className = {!props.rec ? 'quote-panel-title' : 'quote-panel-title-rec' }>Third Party Property Damage</h2>
            <h1 className = 'quote-panel-price'>
                {price}<span className = 'annually-text'>{period}</span>
            </h1>
            <div className = 'benefit-wrap'>
                <div className = 'benefit-box'>
                    <img src = { tick } className = 'quote-panel-tick' />
                    <p className = 'benefit-text'>Earn Flybuys</p>
                </div>
                <div className = 'benefit-box'>
                    <img src = { tick } className = 'quote-panel-tick' />
                    <p className = 'benefit-text'>Earn Airpoints</p>
                </div>
                <div className = 'benefit-box'>
                    <img src = { tick } className = 'quote-panel-tick' />
                    <p className = 'benefit-text'>Supercheap Auto Discount</p>
                </div>
                <div className = 'benefit-box'>
                    <img src = { tick } className = 'quote-panel-tick' />
                    <p className = 'benefit-text'>${props.discount} Online Discount</p>
                </div>
            </div>
            <div className = 'quote-panel-btn-wrap'>
                <input type = 'button' className = 'learn-btn' value = 'Learn More'
                    onClick = {() => showLearn()} />
            </div>

            <div className = 'extra-panel' style = {{display: learn ? 'block' : 'none'}} >
                <div className = 'extra-item'>
                    <h5 className = 'extra-title'>Any Extras?</h5>
                    <div className = 'extra-sub-box'>
                        <input type = 'checkbox' className = 'temp-radio' />
                        <p className = 'extra-text'>
                            Add on Windscreen and Window Cover for $50 per year.
                        </p>
                    </div>
                </div>

                <div className = 'extra-item'>
                    <h5 className = 'extra-title'>Agreed Value</h5>
                    <p className = 'extra-text'>Set the agreed value of your car.</p>
                    <input type = 'text' className = 'agreed-value-input'
                        placeholder = {`Enter Your Car's Value`} />
                </div>

                <div className = 'extra-item'>
                    <h5 className = 'extra-title'>Excess</h5>
                    <p className = 'extra-text'>
                        The set excess for this policy and driver is $400.
                    </p>
                </div>

                <div className = 'extra-item'>
                    <h5 className = 'extra-tc'>Terms and Conditions</h5>
                </div>

                <Link to = '/buyOnline.js'>
                    <input type = 'button' className = 'buy-now-btn'
                        value = 'Buy Now' onClick = { () => proceedBuy(policy) } />
                </Link>
            </div>

        </div>
    )
}

export default QuoteSelect;
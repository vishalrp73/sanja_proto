import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../functions/scrollToTop';
import './quoteCSS/yourQuote.css';
import { Modal } from '@mui/material';
import axios from 'axios';

import UserQuote from '../../components/userQuote/userQuote';

const YourQuote = () => {

    const [priceHike, setPriceHike] = useState(false);
    const [quoteNum, setQuoteNum] = useState('');
    const [open, setOpen] = useState(false);
    const [quoteEmail, setQuoteEmail] = useState('');
    const [disErr, setDisErr] = useState(false);

    useEffect(() => {

        // Generating random quote number
        let alphaResult = '';
        let numResult = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '12345678';
        const charL = characters.length;
        const numL = numbers.length;

        for (let i = 0; i < 2; i++) {
            alphaResult += characters.charAt(Math.floor(Math.random() * charL));
        }
        for (let i = 0; i < 8; i++) {
            numResult += numbers.charAt(Math.floor(Math.random() * numL));
        }
        const quoteNumber = `${alphaResult}${numResult}`;
        console.log(quoteNumber);
        setQuoteNum(quoteNumber);

        // Fetching localStorage user cover details
        try {
            const data = JSON.parse(localStorage.getItem('User Cover Details'));
            const storageAddress = localStorage.getItem('storage-address');
            console.log(data);
            console.log(storageAddress);
    
            console.log(Object.entries(data)[3][1])
    
            const gender = (Object.entries(data)[3][1])
    
            if (gender === 'Female') {
                setPriceHike(false);
                console.log('no price hike applied');
            } else if (gender === 'Male') {
                setPriceHike(true);
                console.log('fuck them dudes');
            }
        } catch {
            console.log(`Don't worry about it man`);
        }
        

    }, [])

    const sendQuote = () => {

        const data = JSON.parse(localStorage.getItem('User Cover Details'))
        const storageAddress = localStorage.getItem('storage-address');
        console.log(data);
        console.log(storageAddress);

        const emailObj = {
            emailAddress : quoteEmail,
            userData : data,
            storageAddress : storageAddress
        }
        axios.post('http://localhost:4000/email', emailObj)
        .then (response => {
            if (response.status === 201) {
                console.log('email sent to server');
                document.getElementById('email-display').innerHTML = 'Your quote has been emailed!';
                setDisErr(false);
            }
        })
        .catch (err => {
            console.log(err)
            setDisErr(true);
            document.getElementById('email-display').innerHTML = 'Quote unable to be sent, check connection'
        });
    }

    return (
        <div className = 'your-quote-wrapper'>
                <div className = 'yourQ-wrapper'>
                    <h2 className = 'yourQ-title'>Our Offers Based on Your Details</h2>

                    <div className = 'quote-detail-wrapper'>
                        <h4 className = 'quote-num-text'>Your Quote Number: {quoteNum}</h4>
                        <input type = 'button' value = 'Email Quote' onClick = {() => setOpen(true)}
                            className = 'email-quote-btn' />
                    </div>

                </div>

                <UserQuote
                    priceHike = {priceHike} />

                <div className = 'bottom-nav-btns'>
                    <Link to = '/getQuote.js' className = 'bottom-back-link'>
                        <input type = 'button' className = 'bottom-back-btn' value = 'Back to Details' />
                    </Link>

                    <Link to = '/buyOnline.js' className = 'bottom-forward-link'>
                        <input type = 'button' className = 'bottom-forward-btn' value = 'Buy Insurance' />
                    </Link>

                </div>

                <Modal className = 'email-modal' open = { open } onClose = {() => setOpen(false)}>
                        <div className = 'email-modal-container'>
                            <h1 className = 'close-modal' onClick = {() => setOpen(false)}>X</h1>
                            <h2 className = 'yourQ-title' style = {{textAlign: 'center'}}>Enter your email address</h2>
                            <input type = 'email' placeholder = 'Enter email address' className = 'quote-email-input'
                                onChange = {(e) => setQuoteEmail(e.target.value)} />
                            <input type = 'button' value = 'Send Me My Quote' onClick = {() => sendQuote()}
                                className = 'quote-send-btn' />
                                <p className = 'email-modal-display' id = 'email-display'
                                    style = {{color: !disErr ? 'limegreen' : 'orangered'}}>
                                </p>
                        </div>
                </Modal>
                <ScrollToTop />
        </div>
    )
}

export default YourQuote;
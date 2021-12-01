import './pageCSS/editQuote.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, Select, MenuItem } from '@mui/material';

const EditQuote = () => {

    const [email, setEmail] = useState('');
    const [quote, setQuote] = useState();
    const [policy, setPolicy] = useState();

    const [display, setDisplay] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        console.log(quote);
    }, [quote])


    const handleSubmit = () => {
        const emailObj = {
            email: email
        }
        email ?
            axios.post('http://localhost:4000/findQuote', emailObj)
            .then (response => {
                setQuote(Object.entries(response.data[0]))
                console.log(response.data[0])
            })
            .catch (err => console.log(err))
        : console.log('no input');
    }

    const handleChange = (e) => {
        setPolicy(e.target.value);
    }

    const handleSave = () => {
        const policyObj = {
            id: quote[0][1],
            policy: policy
        }

        axios.post('http://localhost:4000/save', policyObj)
        .then (response => {
            if (response.status === 201) {
                setDisplay(true);
                setDisplayText('Successfully saved data')
            }
        })
        .catch (err => {
            setDisplay(true)
            setDisplayText('Unable to save data')
            console.log(err)
        });
    }


    return (
        <div className = 'edit-quote-wrapper'>

            <h1 className = 'preface'>
                THIS IS NOT A DESIGNED PAGE. DON'T BLAME UX
            </h1>
            <p className = 'preface-text'>
                Enter an email address to search for a quote and alter the policy type
            </p>
            
            <input type = 'text' className = 'enter-email'
                onChange = {(e) => setEmail(e.target.value)} />

            <input type = 'button' className = 'submit-email-btn'
                value = 'Submit' onClick = {() => handleSubmit()} />

            {

                quote ?
                    <div className = 'change-pol-wrap'>
                        <p className = 'change-pol-title'>
                            Change Policy : {policy}
                        </p>
                        <FormControl fullWidth>
                            <Select labelId = 'change-pol-labelId' id = 'change-pol-id'
                                value = { policy } onChange = {(e) => handleChange(e)}
                                className = 'select-container' >
                                    <MenuItem value = 'Comprehensive'>Comprehensive</MenuItem>
                                    <MenuItem value = 'Third Party Property'>Third Party Property Damage</MenuItem>
                                    <MenuItem value = 'Third Party Fire and Theft'>Third Party Fire and Theft</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            policy ?
                                <>
                                    <input type = 'button'
                                        value = 'Save'
                                        onClick = {() => handleSave()}
                                        className = 'save-btn' />
                                        {
                                            display ?
                                                <>
                                                    <p className = 'save-dis-text'>
                                                        {displayText}
                                                    </p>
                                                </>
                                            : <></>
                                        }
                                </>
                                : <></>
                        }
                    </div>
                : <></>



            }
            {
                quote ?
                    quote.map(item => (
                        <div className = 'field-box'>
                            <p className = 'left-field'>{item[0]}</p>
                            <p className = 'right-field'>{item[1]}</p>
                            <br/>
                        </div>
                    ))
                : <></>
            }

        </div>
    )
}

export default EditQuote;
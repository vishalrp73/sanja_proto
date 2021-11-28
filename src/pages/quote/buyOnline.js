import './quoteCSS/buyOnline.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Modal } from '@mui/material'

import QuotePanel from '../../components/quotePanel/quotePanel';
import SearchLocationInput from '../../functions/searchAddress/SearchLocationInput.js';

const BuyOnline = () => {

    // Your Details Hooks
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Payment Method Hooks
    const [billCus, setBillCus] = useState('');
    const [bankName, setBankName] = useState('');
    const [accName, setAccName] = useState('');
    const [accNum, setAccNum] = useState('');

    // Review Hooks
    const [policy, setPolicy] = useState();
    const [startDate, setStartDate] = useState();
    const [period, setPeriod] = useState();
    const [vehicle, setVehicle] = useState();

    // Validation Check Hooks
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);

    // Modal Hooks
    const [open, setOpen] = useState(false);
    const [userEmailGuest, setUserEmailGuest] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    
    const handleChange = (e, id) => {
        if (id === 'f-name') {
            setFName(e.target.value);
        } else if (id === 'l-name') {
            setLName(e.target.value);
        } else if (id === 'email') {
            setEmail(e.target.value);
        } else if (id === 'phone') {
            setPhone(e.target.value);
        } else if (id === 'cus-name') {
            setBillCus(e.target.value);
        } else if (id === 'bank-name') {
            setBankName(e.target.value);
        } else if (id === 'acc-name') {
            setAccName(e.target.value)
        } else if (id === 'acc-num') {
            setAccNum(e.target.value);
        }
    }

    useEffect(() => {
        try {
            const getPolicy = localStorage.getItem('policy');
            const getPeriod = localStorage.getItem('payment_period');
            const getVehicle = localStorage.getItem('vehicleModel');
            const getData = JSON.parse(localStorage.getItem('User Cover Details'));
            const rawDate = (new Date(getData.date)).toDateString();
            const vehicleSplit = getVehicle.split(',').join(' ');

            setPolicy(getPolicy);
            setStartDate(rawDate);
            setPeriod(getPeriod);
            setVehicle(vehicleSplit);
            
        } catch {
            console.log('info not found');
        }
    });

    const confirmPurchase = () => {
        /* try {
            const userData = JSON.parse(localStorage.getItem('User Cover Details'));
            const storageAddress = localStorage.getItem('storage-address');
            const homeAddress = localStorage.getItem('home-address');
            const policyPrice = localStorage.getItem('policy-price');
            console.log(policyPrice);

            console.log(userData);

            const person = {
                firstName : fName,
                lastName : lName,
                emailAddress : email,
                contactNum : phone,
                homeAddress : homeAddress,
                billingCustomer : billCus,
                bankName : bankName,
                accountName : accName,
                accountNumber : accNum,
                selectedPolicy : policy,
                policyStart : startDate,
                policyPrice : policyPrice,
                paySchedule : period,
                vehicleModel : vehicle,
                // User Coverage Details
                carStorageAdd : storageAddress,
                anyDefects : userData.anyDefects,
                anyFinance : userData.anyFinance,
                currentInsurance : userData.currentInsurance,
                dateOfBirth : userData.dateOfBirth,
                gender : userData.gender,
                howCarUsed : userData.howCarUsed,
                howManyYears : userData.howManyYears,
                isCarMod : userData.isCarMod,
                licenceType : userData.licenceType,
                previousInc : userData.previousInc,
                registrationNumber : userData.regNum
            }

            console.log(person);

            axios.post('http://localhost:4000/quote', person)
            .then (response => {
                console.log(response);
            })
            .catch (err => console.log(err));
        } catch {
            console.log('not enough data')
        }*/
        setOpen(true);
    }

    const validateCheck = (num) => {
        if (num === 1) {
            checkOne ? setCheckOne(false) : setCheckOne(true);
        } else if (num === 2) {
            checkTwo ? setCheckTwo(false) : setCheckTwo(true);
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className = 'buy-online-wrapper'>
            
            <div className = 'detail-panel'>
                <h4 className = 'detail-panel-title'>Your Details</h4>
                <div className = 'detail-panel-core'>
                    <QuotePanel
                        title = 'First Name'
                        input = {
                                <>
                                    <input type = 'text' className = 'ind_question-text-input'
                                        placeholder = 'Enter your first name(s)' 
                                        onChange = {(e) => handleChange(e, 'f-name')} />
                                </>
                        } />
                    <QuotePanel
                        title = 'Last Name'
                        input = {
                                <>
                                    <input type = 'text' className = 'ind_question-text-input'
                                        placeholder = 'Enter your last name' 
                                        onChange = {(e) => handleChange(e, 'l-name')} />
                                </>
                        } />
                    <QuotePanel
                        title = 'Email Address'
                        input = {
                                <>
                                    <input type = 'email' className = 'ind_question-text-input'
                                        placeholder = 'Enter your email address' 
                                        onChange = {(e) => handleChange(e, 'email')} />
                                </>
                        } />
                    <QuotePanel
                        title = 'Contact Number'
                        input = {
                                <>
                                    <input type = 'tel' className = 'ind_question-text-input'
                                        placeholder = 'Enter your contact number' 
                                        onChange = {(e) => handleChange(e, 'phone')} />
                                </>
                        } />
                    <QuotePanel
                        title = {`What is your home address? *`}
                        input = {
                            <>
                                <SearchLocationInput
                                    location = 'buy' />
                            </>} />
                </div>
            </div>

            <div className = 'detail-panel'>
                <h4 className = 'detail-panel-title'>Your Details</h4>
                <h3 className = 'direct-debit-text'>Direct Debit Details</h3>
                <div className = 'detail-panel-core'>
                    <QuotePanel
                        title = 'Billing Customer'
                        input = {
                                <>
                                    <input type = 'text' className = 'ind_question-text-input'
                                        placeholder = 'Enter your name' 
                                        onChange = {(e) => handleChange(e, 'cus-name')} />
                                </>
                        } />
                    <QuotePanel
                        title = 'Bank Name'
                        input = {
                                <>
                                    <input type = 'text' className = 'ind_question-text-input'
                                        placeholder = 'Enter your bank name' 
                                        onChange = {(e) => handleChange(e, 'bank-name')} />
                                </>
                        } />
                    <QuotePanel
                        title = 'Account Name'
                        input = {
                                <>
                                    <input type = 'type' className = 'ind_question-text-input'
                                        placeholder = 'Your account name' 
                                        onChange = {(e) => handleChange(e, 'acc-name')} />
                                </>
                        } />
                    <QuotePanel
                        title = 'Account Number'
                        input = {
                                <>
                                    <input type = 'number' className = 'ind_question-text-input'
                                        placeholder = 'XX-XXXX-XXXXXXX-XX' 
                                        onChange = {(e) => handleChange(e, 'acc-num')} />
                                </>
                        } />
                </div>
            </div>

            <div className = 'add-driver-wrapper'>
                <h4 className = 'add-driver-text'>Visa or Mastercard</h4>
                <h4 className = 'add-driver-plus'>+</h4>
            </div>

            <div className = 'detail-panel'>
                <h4 className = 'detail-panel-title'>Review</h4>
                <p className = 'buyQ-review-cap'>Please review the following details and edit any necessary changes</p>
                <div className = 'detail-panel-core'>
                    <QuotePanel
                        title = 'Selected Policy'
                        input = {
                            <div className = 'review-detail-wrap'>
                                <p className = 'review-item-text'>{policy}</p>
                            </div>
                        } />
                    <QuotePanel
                        title = 'Policy Start Date'
                        input = {
                            <div className = 'review-detail-wrap'>
                                <p className = 'review-item-text'>{startDate}</p>
                            </div>
                        } />
                    <QuotePanel
                        title = 'Payment Schedule'
                        input = {
                            <div className = 'review-detail-wrap'>
                                <p className = 'review-item-text'>{period}</p>
                            </div>
                        } />
                    <QuotePanel
                        title = 'Selected Vehicle'
                        input = {
                            <div className = 'review-detail-wrap'>
                                <p className = 'review-item-text'>{vehicle}</p>
                            </div>
                        } />
                </div>
            </div>

            <div className = 'bottom-wrap-buyQ'>
                <div className = 'bottom-checkbox-wrap'>
                    <input type = 'checkbox' className = 'temp-check' onClick = {() => validateCheck(1)}/>
                    <p className = 'check-text'>
                        Yes, I am the account holder and authorise regular payments from this debit account.
                    </p>
                </div>

                <div className = 'bottom-checkbox-wrap'>
                    <input type = 'checkbox' className = 'temp-check' onClick = {() => validateCheck(2)}/>
                    <p className = 'check-text'>
                        By continuing, you accept the following &nbsp;
                        <span className = 'tandc'>Terms &amp; Conditions</span> and <span className = 'tandc'>Privacy Policy</span>
                    </p>
                </div>
            </div>

            <div className = 'bottom-nav-btns'>
                <Link to = '/yourQuote.js' className = 'bottom-back-link'>
                    <input type = 'button' className = 'bottom-back-btn' value = 'Back to Quote' />
                </Link>

                {
                    (fName !== '')
                    && (lName !== '')
                    && (email !== '')
                    && (phone !== '')
                    && (billCus !== '')
                    && (bankName !== '')
                    && (accName !== '')
                    && (accNum !== '')
                    && (policy !== '')
                    && (startDate !== '')
                    && (period !== '')
                    && (vehicle !== '')
                    && (checkOne)
                    && (checkTwo) ?
                        <>
                            <input type = 'button' className = 'bottom-forward-btn' 
                                value = 'Confirm Purchase' onClick = {() => confirmPurchase()} />
                        </> : <></>
                }

            </div>

            <Modal className = 'login-modal' open = {open} onClose = {() => handleClose()} >
                <div className = 'acc-container'>

                <h4 className = 'modal-title-main'>
                    How would you like to continue today?
                </h4>

                <div className = 'modal-input-container'>

                    <div className = 'guest-wrapper'>
                        <h5 className = 'modal-title'>Continue as Guest</h5>
                        <p className = 'modal-caption'>Where should we email your receipt?</p>

                        <h5 className = 'modal-title-em'>Email</h5>
                        <input type = 'text' placeholder = 'Enter your email' onChange = {(e) => setUserEmailGuest(e.target.value)}
                            className = 'modal-text-input' value = {userEmailGuest} />

                        <div className = 'check-text-pair'>
                            <input type = 'checkbox' className = 'modal-checkbox' />
                            <p className = 'modal-check-text'>
                                Register for faster checkout and online account management.
                            </p>
                        </div>

                        <div className = 'temp-guest'>
                            {
                                (userEmailGuest !== '') ?
                                    <>
                                        <Link to = '/success.js' className = 'cont-acc-link'>
                                            <input type = 'button' className = 'cont-acc-btn'
                                                value = 'Continue as Guest' />
                                        </Link>
                                    </> : 
                                    <>
                                        <input type = 'button' className = 'cont-acc-btn'
                                            value = 'Continue as Guest'
                                            style = {{backgroundColor: '#939393'}} />
                                    </>
                            }

                            

                        </div>

                    </div>

                        <div className = 'login-wrapper'>

                            <h5 className = 'modal-title'>Login</h5>
                            <p className = 'modal-caption'>Login to checkout faster</p>

                            <h5 className = 'modal-title-em'>Email</h5>
                            <input type = 'text' placeholder = 'Enter your email' onChange = {(e) => setUserEmail(e.target.value)}
                                className = 'modal-text-input' value = {userEmail} />

                            <div className = 'ps-wrap'>
                                <h5 className = 'modal-title'>Password</h5>
                                <p className = 'fg-pass'>Forgot password?</p>
                            </div>
                            <input type = 'password' placeholder = 'Enter your password' onChange = {(e) => setUserPass(e.target.value)}
                                className = 'modal-text-input' value = {userPass} />
                            
                            
                            <div className = 'check-text-pair'>
                                <input type = 'checkbox' className = 'modal-checkbox' />
                                <p className = 'modal-check-text'>Keep me logged in</p>
                            </div>

                            <div className = 'temp'>

                                {
                                    (userEmail !== '')
                                    && (userPass !== '') ?
                                        <>
                                            <Link to = '/success.js'>
                                                <input type = 'button' className = 'cont-acc-btn'
                                                    value = 'Continue as Member'/>
                                            </Link>
                                        </> :
                                        <>
                                            <input type = 'button' className = 'cont-acc-btn'
                                                value = 'Continue as Member'
                                                style = {{backgroundColor: '#939393'}} />
                                        </>
                                }


                            </div>
                        </div>
                    </div>


                </div>
            </Modal>


        </div>
    )
}

export default BuyOnline;
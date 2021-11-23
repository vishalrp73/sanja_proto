import './CSS/yourQuote.css';
import '../../pages/pageCSS/quote.css';

import { useState } from 'react';

import tick from '../../img/quote/tick.png';
import { angryReact } from '../../functions/angryReact';
import bar from '../../img/quote/stepper-bar.png';

import Modal from '@mui/material/Modal';

const YourQuote = () => {

    const [learn, setLearn] = useState(false);
    const [open, setOpen] = useState(false);

    const showLearnMore = () => {
        learn ? setLearn(false) : setLearn(true);
        document.getElementById('learn-more-btn').value = 'Show Less'
        console.log(document.getElementById('learn-more-btn').value);
    }

    const tempFunc = () => {
        alert('temp function button clicked')
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <div className = 'quote-wrapper'>

            <div className = 'quote-menu'>
                <h1 className = 'top-quote-title'>Car Insurance Quick Quote</h1>
                <div className = 'stepper-wrapper'>

                    <div className = 'stepper-box'>
                        <p className = 'stepper-text'>Cover Details</p>
                    </div>

                    <img src = { bar } className = 'stepper-bar-img' />

                    <div className = 'stepper-box' id = 'active-text'>
                        <p className = 'stepper-text' style={{color: '#0076BE'}}>
                            Your Quote</p>
                    </div>

                    <img src = { bar } className = 'stepper-bar-img' />

                    <div className = 'stepper-box'>
                        <p className = 'stepper-text'>Buy Online</p>
                    </div>


                </div>
            </div>
            <div className = 'quote-core-wrapper'>
                <div className = 'yourQ-wrapper'>
                    <h2 className = 'yourQ-title'>Our Offers Based on Your Details</h2>

                    <div className = 'quote-detail-wrapper'>
                        <h4 className = 'quote-num-text'>Your Quote Number: TC12345678</h4>
                        <input type = 'button' value = 'Email Quote' onClick = { () => angryReact() }
                            className = 'email-quote-btn' />
                    </div>


                    <div className = 'quote-choose-wrap'>
                        <input type = 'button' value = 'Annually' onClick = { () => angryReact() }
                            className = 'quote-choose-btn-active' />
                        <input type = 'button' value = 'Monthly' onClick = { () => angryReact() }
                            className = 'quote-choose-btn' />
                        <input type = 'button' value = 'Fortnightly' onClick = { () => angryReact() }
                            className = 'quote-choose-btn' />
                    </div>

                    <div className = 'quote-select-wrap'>
                        
                        
                        <div className = 'quote-select-panel' id = 'rec_panel'>
                            <div className = 'quote-rec-bar'>
                                <h2 className = 'quote-rec-text'>Recommended</h2>
                            </div>
                            <h2 className = 'quote-panel-title-rec'>Comprehensive Everyday Plus</h2>
                            <h1 className = 'quote-panel-price'>
                                $635.54<span className = 'annually-text'>Annually</span>
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
                                    <p className = 'benefit-text'>$50 Online Discount</p>
                                </div>
                            </div>
                            <div className = 'quote-panel-btn-wrap'>
                                <input type = 'button' className = 'learn-btn' value = 'Learn More'
                                    onClick = { () => showLearnMore() } id = 'learn-more-btn' />

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

                                <input type = 'button' className = 'buy-now-btn'
                                    value = 'Buy Now' onClick = { () => setOpen(true) } />
                            </div>                        


                        </div>

                        <div className = 'quote-select-panel'>
                            <h2 className = 'quote-panel-title'>Third Party Property Damage</h2>
                            <h1 className = 'quote-panel-price'>
                                $422.76<span className = 'annually-text'>Annually</span>
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
                                    <p className = 'benefit-text'>$40 Online Discount</p>
                                </div>
                            </div>
                            <div className = 'quote-panel-btn-wrap'>
                                <input type = 'button' className = 'learn-btn' value = 'Learn More'
                                    onClick = { () => angryReact() } />
                            </div>
                        </div>

                        <div className = 'quote-select-panel'>
                            <h2 className = 'quote-panel-title'>Third Party Fire and Theft Damage</h2>
                            <h1 className = 'quote-panel-price'>
                                $175.33<span className = 'annually-text'>Annually</span>
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
                                    <p className = 'benefit-text'>$30 Online Discount</p>
                                </div>
                            </div>
                            <div className = 'quote-panel-btn-wrap'>
                                <input type = 'button' className = 'learn-btn' value = 'Learn More'
                                    onClick = { () => angryReact() } />
                            </div>
                        </div>
                    </div>
                </div>

                <div className = 'bottom-nav-btns'>
                    <a href = '/quote.js' className = 'bottom-back-link'>
                        <input type = 'button' className = 'bottom-back-btn' value = 'Back to Details' />
                    </a>


                        <input type = 'button' className = 'bottom-forward-btn' value = 'Buy Insurance'
                        onClick = {() => setOpen(true)} />

                </div>



            </div>

            <Modal className = 'acc-modal' open = { open } onClose = {() => handleClose()}>
                <div className = 'acc-container'>

                    <h4 className = 'modal-title-main'>
                        How would you like to continue today?
                    </h4>

                    <div className = 'modal-input-container'>

                        <div className = 'guest-wrapper'>
                            <h5 className = 'modal-title'>Continue as Guest</h5>
                            <p className = 'modal-caption'>Where should we email your receipt?</p>

                            <h5 className = 'modal-title-em'>Email</h5>
                            <input type = 'text' placeholder = 'Enter your email'
                                className = 'modal-text-input' />

                            <div className = 'check-text-pair'>
                                <input type = 'checkbox' className = 'modal-checkbox' />
                                <p className = 'modal-check-text'>
                                    Register for faster checkout and online account management.
                                </p>
                            </div>

                            <div className = 'temp-guest'>

                                <a href = '/buyQuote.js' className = 'cont-acc-link'>
                                    <input type = 'button' className = 'cont-acc-btn'
                                        value = 'Continue as Guest' />
                                </a>

                            </div>

                        </div>

                        <div className = 'login-wrapper'>

                            <h5 className = 'modal-title'>Login</h5>
                            <p className = 'modal-caption'>Login to checkout faster</p>

                            <h5 className = 'modal-title-em'>Email</h5>
                            <input type = 'text' placeholder = 'Enter your email'
                                className = 'modal-text-input' />

                            <div className = 'ps-wrap'>
                                <h5 className = 'modal-title'>Password</h5>
                                <p className = 'fg-pass'>Forgot password?</p>
                            </div>
                            <input type = 'text' placeholder = 'Enter your password'
                                className = 'modal-text-input' />
                            
                            
                            <div className = 'check-text-pair'>
                                <input type = 'checkbox' className = 'modal-checkbox' />
                                <p className = 'modal-check-text'>Keep me logged in</p>
                            </div>

                            <div className = 'temp'>

                                <a href = '/buyQuote.js' className = 'cont-acc-link'>
                                    <input type = 'button' className = 'cont-acc-btn'
                                        value = 'Continue as Member' />
                                </a>

                            </div>

                            

                        </div>
                    </div>


                </div>
            </Modal>
        </div>
    )
}

export default YourQuote;
import '../../pages/pageCSS/quote.css';
import './CSS/buyQuote.css';
import './CSS/yourQuote.css';

import bar from '../../img/quote/stepper-bar.png';

const BuyQuote = () => {
    return (
        <div className = 'quote-wrapper'>

            <div className = 'quote-menu'>
                <h1 className = 'top-quote-title'>Car Insurance Buy Online</h1>
                <div className = 'stepper-wrapper'>

                    <div className = 'stepper-box'>
                        <p className = 'stepper-text'>Cover Details</p>
                    </div>

                    <img src = { bar } className = 'stepper-bar-img' />

                    <div className = 'stepper-box'>
                        <p className = 'stepper-text'>Your Quote</p>
                    </div>

                    <img src = { bar } className = 'stepper-bar-img' />

                    <div className = 'stepper-box' id = 'active-text'>
                        <p className = 'stepper-text' style={{color: '#0076BE'}}>
                            Buy Online</p>
                    </div>


                </div>
            </div>
                <div className = 'quote-core-wrapper'>
                    
                    <div className = 'detail-panel'>
                        
                        <h4 className = 'detail-panel-title'>Your Details</h4>
                        <div className = 'detail-panel-core'>
                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>First Name</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'Enter your first name(s)' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Last Name</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'drop down placeholder area - non-functioning' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Email Address</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'Start typing address' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Contact Number</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'drop down placeholder - non-functioning' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>What is your home address?</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'drop down placeholder - non-functioning' />
                            </div>
                        </div>

                        <h4 className = 'detail-panel-title'>Payment Method</h4>
                        <h3 className = 'direct-debit-text'>
                            Direct Debit Details
                        </h3>
        
                        <div className = 'detail-panel-core' id = 'dp-ay'>
                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Billing Customer</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'drop down placeholder area - non-functioning' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Bank Name</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'drop down placeholder area - non-functioning' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Account Name</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'Your account name' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Account Number</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'XX-XXXX-XXXXXXX-XX' />
                            </div>

                        </div>

                        <div className = 'add-driver-wrapper'>
                            <h4 className = 'add-driver-text'>Visa or Mastercard</h4>
                            <h4 className = 'add-driver-plus'>+</h4>
                        </div>


                        <h4 className = 'detail-panel-title'>Review</h4>
                        <p className = 'buyQ-review-cap'>
                            Please review the following details and edit any necessary changes
                        </p>
        
                        <div className = 'detail-panel-core' id = 'dp-ay'>
                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Selected Policy</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'Comprehensive Everyday Plus -- non-functioning' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Policy Start Date</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = '03/12/21 -- non-functioning' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Payment Schedule</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = 'Annually -- non-functioning' />
                            </div>

                            <div className = 'ind_question-panel'>
                                <h5 className = 'ind_question-title'>Selected Vehicle</h5>
                                <input type = 'text' className = 'ind_question-input-buyQ'
                                    placeholder = '2007 Suzuki Swift -- non-functioning' />
                            </div>

                        </div>



                        <div className = 'bottom-wrap-buyQ'>
                            <div className = 'bottom-checkbox-wrap'>
                                <input type = 'checkbox' className = 'temp-check' />
                                <p className = 'check-text'>
                                    Yes, I am the account holder and authorise regular payments from this debit account.
                                </p>
                            </div>

                            <div className = 'bottom-checkbox-wrap'>
                                <input type = 'checkbox' className = 'temp-check' />
                                <p className = 'check-text'>
                                    By continuing, you accept the following &nbsp;
                                    <span className = 'tandc'>Terms &amp; Conditions</span> and <span className = 'tandc'>Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                        

                        <div className = 'bottom-nav-btns'>
                            <a href = '/yourQuote.js' className = 'bottom-back-link'>
                                <input type = 'button' className = 'bottom-back-btn' value = 'Back to Quote' />
                            </a>

                            <a href = '/success.js' className = 'bottom-forward-link'>
                                <input type = 'button' className = 'bottom-forward-btn' value = 'Confirm Purchase' />
                            </a>
                        </div>









                    </div>

                    
            </div>
        </div>
    )
}

export default BuyQuote;
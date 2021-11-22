import './CSS/details.css';

import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div className = 'details-wrapper'>
            
            <div className = 'detail-panel'>
                <h4 className = 'detail-panel-title'>About Your Car</h4>
                <div className = 'detail-panel-core'>
                    
                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>What is your cars registration number? *</h5>
                        <p className = 'ind_question-caption'>
                            Enter your car registration number.
                        </p>
                        <input type = 'text' className = 'ind_question-input'
                            placeholder = 'ABC123' />
                        <p>Don't know your registration number?</p>
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>How do you use your car? *</h5>
                        <p className = 'ind_question-caption'>Select if your car used for personal or business use.</p>
                        <input type = 'text' className = 'ind_question-input'
                            placeholder = 'drop down placeholder area - non-functioning' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>Where do you keep your car? *</h5>
                        <p className = 'ind_question-caption'>Type in the address of where you keep your car.</p>
                        <input type = 'text' className = 'ind_question-input'
                            placeholder = 'Start typing address' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>When do you want your policy to start? *</h5>
                        <p className = 'ind_question-caption'>Enter the date you would like your policy to begin.</p>
                        <input type = 'text' className = 'ind_question-input'
                            placeholder = 'drop down placeholder - non-functioning' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>Does your car have modifications? *</h5>
                        <p className = 'ind_question-caption'>If the modification is under $500, select no.</p>
                        <input type = 'text' className = 'ind_question-input'
                            placeholder = 'drop down placeholder - non-functioning' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>Is there any finance on this car? *</h5>
                        <p className = 'ind_question-caption'>If you borrowed from friends / family, select no.</p>
                        <input type = 'text' className = 'ind_question-input'
                            placeholder = 'drop down placeholder - non-functioning' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>When do you want your policy to start? *</h5>
                        <input type = 'text' className = 'ind_question-input'
                            placeholder = 'drop down placeholder - non-functioning' />
                    </div>

                </div>
            </div>

            <div className = 'detail-panel' >
                <h4 className = 'detail-panel-title'>About You</h4>

                <h3 className = 'main-driver'>+ The Main Driver</h3>
                <div className = 'detail-panel-core' id = 'dp-ay'>
                    
                    <div className = 'ind_question-panel' >
                        <h5 className = 'ind_question-title'>What is your date of birth? *</h5>
                        <input type = 'text' className = 'ind_question-input' id = 'ay'
                            placeholder = 'ABC123' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>Are you female or male? *</h5>
                        <input type = 'text' className = 'ind_question-input' id = 'ay'
                            placeholder = 'drop down placeholder area - non-functioning' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>What licence do you currently hold? *</h5>
                        <input type = 'text' className = 'ind_question-input' id = 'ay'
                            placeholder = 'Start typing address' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>Are you currently insured? *</h5>
                        <input type = 'text' className = 'ind_question-input' id = 'ay'
                            placeholder = 'drop down placeholder - non-functioning' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>
                            How many years have you had your drivers licence, including your learners licence? *
                        </h5>
                        <input type = 'text' className = 'ind_question-input' id = 'ay'
                            placeholder = 'drop down placeholder - non-functioning' />
                    </div>

                    <div className = 'ind_question-panel'>
                        <h5 className = 'ind_question-title'>
                            In the last 5 years, have you had any incidents involving damage or theft of a vehicle?
                        </h5>
                        <input type = 'text' className = 'ind_question-input' id = 'ay'
                            placeholder = 'drop down placeholder - non-functioning' />
                    </div>

                </div>
            </div>

            <div className = 'add-driver-wrapper'>
                <h4 className = 'add-driver-text'>Add Another Driver</h4>
                <h4 className = 'add-driver-plus'>+</h4>
            </div>

            <a href = '/yourQuote.js' className = 'con-quote-link'>
                <input type = 'button' value = 'Continue to Quote' 
                    className = 'con_quote-btn' />
            </a>


        </div>
    )
}

export default Details;
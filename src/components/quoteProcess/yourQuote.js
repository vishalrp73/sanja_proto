import './CSS/yourQuote.css';

const YourQuote = () => {
    return (
        <div className = 'yourQ-wrapper'>
            <h2 className = 'yourQ-title'>Our Offers Based on Your Details</h2>
            <h1>TURN BACK NOW THIS IS EXTREMELY UNFINISHED</h1>

            <div className = 'quote-detail-wrapper'>
                <h4 className = 'quote-num-text'></h4>
                <input type = 'button' value = 'Email Quote'
                    className = 'email-quote-btn' />
            </div>


            <div className = 'quote-choose-wrap'>
                <input type = 'button' value = 'Annually' className = 'quote-choose-btn-active' />
                <input type = 'button' value = 'Monthly' className = 'quote-choose-btn' />
                <input type = 'button' value = 'Fortnightly' className = 'quote-choose-btn' />
            </div>

            <div className = 'quote-select-wrap'>
                <div className = 'quote-select-panel'>

                </div>
            </div>
        </div>
    )
}

export default YourQuote;
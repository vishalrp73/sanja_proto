import './pageCSS/success.css';
import ScrollToTop from '../functions/scrollToTop';
import success_img from '../img/success-banner.png';

import { useHistory } from 'react-router-dom';

const Success = () => {

    const history = useHistory();

    const editQuote = () => {
        history.push('/editQuote.js');
        window.location.reload(false);
    }


    return (
        <div className = 'success-wrapper'>
            <div className = 'success-left'>
                <h1 className = 'success-title'>
                    Hooray! You're ready for any unexpected bumps in the road.
                </h1>

                <p className = 'success-text'>
                    Thank you for choosing Turners Car Insurance.<br />
                    We have sent you an information pack, including account details
                    and a receipt, to your selected email.
                </p>

                <div className = 'success-btn-wrap'>
                    <a href = '/' className = 'success-link'>
                        <input className = 'success-btn' id = 'success-home-btn'
                            type = 'button' value = 'Back Home' />
                    </a>
                    <input className = 'success-btn' id = 'acc-btn'
                        type = 'button' value = 'My Account' onClick = {() => editQuote()} />
                    
                </div>
            </div>

            <div className = 'success-right'>
                <img src = { success_img } className = 'success-img' alt = 'happy-success' />
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Success;
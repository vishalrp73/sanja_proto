import './pageCSS/success.css';
import success_img from '../img/success-banner.png';

const Success = () => {
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
                        type = 'button' value = 'My Account' />
                    
                </div>
            </div>

            <div className = 'success-right'>
                <img src = { success_img } className = 'success-img' alt = 'happy-success' />
            </div>
        </div>
    )
}

export default Success;
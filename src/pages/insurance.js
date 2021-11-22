import './pageCSS/home.css';
import './pageCSS/insurance.css';

import { Link } from 'react-router-dom';

import ins_banner from '../img/insurance/insurance-banner.png';

const Insurance = () => {
    return (
        <div className = 'insurance-wrapper'>
            
            <div className = 'banner-core'>
                <div className = 'banner-left'>
                    <h1 className = 'banner-title'>
                        Get a personal quote in less than two minutes.
                    </h1>
                    
                    <a href = '/quote.js'>
                        <input type = 'button' value = 'Get Quote'
                            className = 'get-quote-btn' />
                    </a>
                </div>
                <img src = { ins_banner } className = 'banner-fg-img' />
            </div>

        </div>
    )
}

export default Insurance;
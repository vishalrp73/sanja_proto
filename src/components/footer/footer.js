import './footer.css';

import fb_icon from '../../img/fb-icon.png';
import ig_icon from '../../img/ig-icon.png';
import award_1 from '../../img/award-1.png';
import award_2 from '../../img/award-2.png';

import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className = 'footer-wrapper'>
            
            <div className = 'ft-text-wrapper'>

                <div className = 'ft-top'>
                    <div className = 'ft-box'>
                        <h5 className = 'ft-title'>Buy</h5>
                        <p className = 'ft-text'>Our Cars</p>
                        <p className = 'ft-text'>Auctions &amp; Events</p>
                    </div>

                    <div className = 'ft-box'>
                        <h5 className = 'ft-title'>Sell</h5>
                        <p className = 'ft-text'>Trade In</p>
                        <p className = 'ft-text'>Turners Cash Now</p>
                        <p className = 'ft-text'>Book an Appraisal</p>
                    </div>

                    <div className = 'ft-box'>
                        <h5 className = 'ft-title'>Insurance</h5>
                        <Link to = '/insurance.js' className = 'ft-link'>
                            <p className = 'ft-text'>Car Insurance</p>
                        </Link>
                        <Link to = '/quote.js' className = 'ft-link'>
                            <p className = 'ft-text'>Get a Quote</p>
                        </Link>
                    </div>

                    <div className = 'ft-box'>
                        <h5 className = 'ft-title'>Finance</h5>
                        <p className = 'ft-text'>Personal Finance</p>
                        <p className = 'ft-text'>Business Finance</p>
                    </div>
                </div>


                <div className = 'ft-bottom'>
                    
                    <div className = 'ft-box-bot'>
                        <h5 className = 'ft-title'>About Turners Cars</h5>
                        <p className = 'ft-text'>Our Values</p>
                        <p className = 'ft-text'>Our Team</p>
                        <p className = 'ft-text'>Customer Reviews</p>
                        <p className = 'ft-text'>Careers</p>
                    </div>

                    <div className = 'ft-box-bot'>
                        <h5 className = 'ft-title'>Help &amp; Customer Service</h5>
                        <p className = 'ft-text'>Contact Us</p>
                        <p className = 'ft-text'>Terms &amp; Conditions</p>
                        <p className = 'ft-text'>Privacy Policy</p>
                        <p className = 'ft-text'>Buyers &amp; Sellers Fees</p>
                        <p className = 'ft-text'>Delivery Fees</p>
                        <p className = 'ft-text'>COVID-19 Information</p>
                    </div>

                    <div className = 'ft-box-bot'>
                        <h5 className = 'ft-title'>FAQ's</h5>
                        <p className = 'ft-text'>Buy</p>
                        <p className = 'ft-text'>Sell</p>
                        <p className = 'ft-text'>Insurance</p>
                        <p className = 'ft-text'>Finance</p>
                    </div>


                </div>


            </div>





            <div className = 'links-wrapper'>

                <div className = 'follow-wrap'>
                    <h3 className = 'links-title'>Follow Us</h3>
                    <div className = 'ft-img-wrap'>
                        <img src = { fb_icon } className = 'link-img' />
                        <img src = { ig_icon } className = 'link-img' />
                    </div>
                </div>

                <div className = 'awards-wrap'>
                    <h3 className = 'links-title'>Awards</h3>
                    <div className = 'ft-img-wrap'>
                        <img src = { award_1 } className = 'awards-img' />
                        <img src = { award_2 } className = 'awards-img' />
                    </div>
                </div>

                <div className = 'sub-wrap'>
                    <h3 className = 'links-title'>Subscribe to Our Newsletter</h3>
                    <input type = 'text' placeholder = 'Enter Your Email Address'
                        className = 'sub-input' />
                </div>


            </div>


        </div>
    )

}

export default Footer;
import './pageCSS/home.css';
import { Link } from 'react-router-dom';

import home_banner from '../img/home-banner.png';
import panel_img_1 from '../img/home-panel-1.png';
import panel_img_2 from '../img/home-panel-2.png';
import panel_img_3 from '../img/home-panel-3.png';
import star from '../img/star.png';

import { angryReact } from '../functions/angryReact';

const Home = () => {


    return (
        <div className = 'home-wrapper'>

            <div className = 'banner-core'>
                <div className = 'banner-left'>
                    <h1 className = 'banner-title'>
                        Buy, sell and insure your car. All in one place.
                    </h1>
                    <input type = 'text' placeholder = 'Search for Cars by Keywords'
                        className = 'banner-search' />
                </div>
                <img src = { home_banner } className = 'banner-fg-img' />
            </div>


            <div className = 'home-panel'>
                <div className = 'panel-left'>
                    <h3 className = 'panel-title'>Buying with Turners Cars</h3>
                    <p className = 'panel-text'>
                        If you’re in the market for a car, look no further! When you buy your car through Turners, you will recieve one year of Comprehensive Car Insurance on us.
                    </p>
                    <input type = 'button' value = 'Start Browsing' style = {{ cursor: 'pointer' }}
                        className = 'panel-btn' onClick = { () => angryReact() } />
                </div>

                <div className = 'panel-right'>
                    <img src = { panel_img_1 } className = 'panel-img' />
                </div>
            </div>

            <div className = 'home-panel'>
                <div className = 'panel-left'>
                    <h3 className = 'panel-title'>Sell or Trade In Your Car</h3>
                    <p className = 'panel-text'>
                        It can be a pain to sell your car - so let us do the dirty work for you! All you have to do is book an appraisal and we’ll take care of the rest.  
                    </p>
                    <input type = 'button' value = 'Book Now' style = {{ cursor: 'pointer' }}
                        className = 'panel-btn' onClick = { () => angryReact() } />
                </div>

                <div className = 'panel-right'>
                    <img src = { panel_img_2 } className = 'panel-img' />
                </div>
            </div>

            <div className = 'home-panel'>
                <div className = 'panel-left'>
                    <h3 className = 'panel-title'>Car Insurance</h3>
                    <p className = 'panel-text'>
                        At Turners, safety is our first priority. We offer three types of car insurance, at prices everyone can afford and perks that everybody loves.
                    </p>
                    <Link to = '/quote.js'>
                        <input type = 'button' value = 'Buy Now' style = {{ cursor: 'pointer' }}
                            className = 'panel-btn' />
                    </Link>
                </div>

                <div className = 'panel-right'>
                    <img src = { panel_img_3 } className = 'panel-img' />
                </div>
            </div>


            <div className = 'review-panel'>

                <h3 className = 'review-title'>What Our Customers are Saying</h3>

                <div className = 'review-wrap'>

                    <div className = 'ind_review'>
                        <div className = 'review-top_bar'>
                            <h5 className = 'review-name'>Lisa Smith</h5>
                            <div classname = 'review-stars'>
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                            </div>
                        </div>
                        <p className = 'review-loc'>Whangarei, NZ</p>
                        <p className = 'review-text'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas.
                        </p>
                    </div>

                    <div className = 'ind_review'>
                        <div className = 'review-top_bar'>
                            <h5 className = 'review-name'>Richard Tee</h5>
                            <div classname = 'review-stars'>
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                            </div>
                        </div>
                        
                        <p className = 'review-loc'>Auckland, NZ</p>
                        <p className = 'review-text'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas.
                        </p>
                    </div>

                    <div className = 'ind_review'>
                        <div className = 'review-top_bar'>
                            <h5 className = 'review-name'>Jenny Wilson</h5>
                            <div classname = 'review-stars'>
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                                <img src = { star } className = 'review_star_img' />
                            </div>
                        </div>
                        
                        <p className = 'review-loc'>Hawkes Bay,</p>
                        <p className = 'review-text'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas.
                        </p>
                    </div>


                </div>


            </div>


        </div>
    )
}

export default Home;
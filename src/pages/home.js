import './pageCSS/home.css';

import Banner from '../components/banner/banner';
import banner_img from '../img/home/home-banner.png';

import HomePanel from '../components/home_panel/homePanel';
import home_panel_1 from '../img/home/home-panel-1.png';
import home_panel_2 from '../img/home/home-panel-2.png';
import home_panel_3 from '../img/home/home-panel-3.png';

import Review from '../components/review/review';

const Home = () => {
    return (
        <div className = 'home-wrapper'>
            <Banner
                title = 'Buy, sell and insure your car. All in one place.'
                input_type = 'text'
                input_cln = 'banner-search'
                input_plc = 'Search for Cars by Keywords'
                banner_img = { banner_img } /> 

            <HomePanel
                link = '#'
                title = 'Buying with Turners Cars'
                text = 'If you’re in the market for a car, look no further! When you buy your car through Turners, you will recieve one year of Comprehensive Car Insurance on us.'
                btn_value = 'Book Now'
                img = { home_panel_1 } />

            <HomePanel
                link = '#'
                title = 'Sell or Trade In Your Car'
                text = 'It can be a pain to sell your car - so let us do the dirty work for you! All you have to do is book an appraisal and we’ll take care of the rest.'
                btn_value = 'Start Browsing'
                img = { home_panel_2 } />

            <HomePanel
                link = '/getQuote.js'
                title = 'Car Insurance'
                text = 'At Turners, safety is our first priority. We offer three types of car insurance, at prices everyone can afford and perks that everybody loves.'
                btn_value = 'Start Browsing'
                img = { home_panel_3 } />

            <div className = 'review-panel'>

                <h3 className = 'review-title'>What Our Customers are Saying</h3>

                <div className = 'review-wrap'>

                    <Review
                        review_text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas.'
                        name = 'Lisa Smith'
                        five = {false}
                        location = 'Whangarei, NZ' />

                    <Review
                        review_text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas.'
                        name = 'Richard Tee'
                        five = {true}
                        location = 'Auckland, NZ' />

                    <Review
                        review_text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas.'
                        name = 'Jenny Wilson'
                        five = {false}
                        location = 'Hawkes Bay, NZ' />


                </div>



            </div>
        </div>
    )
}

export default Home;
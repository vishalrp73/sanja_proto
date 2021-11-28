import './pageCSS/insurance.css';

import banner_img from '../img/insurance/insurance-banner.png';
import Banner from '../components/banner/banner';

import ComparePanel from '../components/comparePanel/comparePanel';
import compare_graph from '../img/insurance/compare-graph.png';

import Perks from '../components/perks/perks';
import flybuys from '../img/insurance/flybuys.png';
import airpoints from '../img/insurance/airpoints.png';
import supercheap from '../img/insurance/supercheapauto.png';

const Insurance = () => {
    return (
        <div className = 'insurance-wrapper'>
            
            <Banner
                link = '/getQuote.js'
                title = 'Get a personal quote in less than two minutes.'
                input_type = 'button'
                input_cln = 'get-quote-btn'
                btn_value = 'Get Quote'
                banner_img = { banner_img } />

            <div className = 'compare-wrapper'>
            
                <h1 className = 'compare-title'>Compare Our Policies</h1>

                <div className = 'compare-module'>

                    <ComparePanel
                        compare_title = 'Comprehensive Everyday Plus' 
                        compare_text = {`Comprehensive policy covers your vehicle for accident, fire or theft
                        and your liability for damage to other peoples' property.`}
                        rec = {true}/>

                    <ComparePanel
                        compare_title = 'Third Party Property Damage' 
                        compare_text = {`Third Party Property Damage policy covers your liability for damage to
                        other peoples' property`}
                        rec = {false}/>

                    <ComparePanel
                        compare_title = 'Third Party Fire and Theft Damage' 
                        compare_text = {`Third Party F&amp;T policy covers your vehicle for fire and theft and
                        your liability for damage to other peoples property.`}
                        rec = {false}/>
                
                </div>

                <div className = 'compare-graph-container'>
                    <img src = { compare_graph } className = 'compare-graph-img' alt = 'comapre-graph' />
                </div>

                <div className = 'perks-wrapper'>
                    <h3 className = 'perks-title'>
                        Enjoy Perks with Turners Car Insurance
                    </h3>
                    <div className = 'perks-container'>
                        <div className = 'perk-top'>
                            <Perks img = { flybuys } text = 'Receive Flybuys points when you insure your car with Turners Cars.' />
                            <Perks img = { airpoints } text = 'Register your Airpoints number with us to get rewarded when you insure or buy a car.' />
                            <Perks img = { supercheap } text = {`We've teamed up with Supercheap Auto to keep giving you perks, even after your purchase.`} />
                        </div>
                        <div className = 'perk-bot'>
                            <Perks title = 'Online Discount' text = 'Buy your insurance online and receive up to a $50 discount.' />
                            <Perks title = 'Swap to Turners Insurance' text = {`Already have insurance and are thinking of making a change? We'll make it easy for you.`} />
                            <Perks title = 'Online Account Management' text = 'Need to make some quick changes to your insurance? Manage it all online!' />
                        </div>
                    </div>
                </div>

                <div className = 'insurance-faq'>
                    <h3 className = 'insurance-faq-title'>FAQ's about Car Insurance</h3>
                    <input type = 'button' className = 'insurance-faq-btn'
                        value = 'Comprehensive Everyday Plus' />
                    <input type = 'button' className = 'insurance-faq-btn'
                        value = 'Third Party Property Damage' />
                    <input type = 'button' className = 'insurance-faq-btn'
                        value = 'Third Party Fire and Theft Damage' />
                    <input type = 'button' className = 'insurance-faq-btn'
                        value = 'Mechanical Breakdown Insurance' />
                </div>

            </div>
        </div>
    )
}

export default Insurance;
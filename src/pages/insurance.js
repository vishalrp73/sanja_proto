import './pageCSS/home.css';
import './pageCSS/insurance.css';

import { Link } from 'react-router-dom';

import ins_banner from '../img/insurance/insurance-banner.png';
import compare_graph from '../img/insurance/compare-graph.png';
import { angryReact } from '../functions/angryReact';

import flybuys from '../img/insurance/flybuys.png';
import airpoints from '../img/insurance/airpoints.png';
import supercheap from '../img/insurance/supercheapauto.png';

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


            <div className = 'compare-wrapper'>
                <h1 className = 'compare-title'>Compare Our Policies</h1>

                <div className = 'compare-module'>

                    <div className = 'compare-panel'>
                        <div className = 'compare-rec-box'>
                            <p className = 'compare-rec-text'>Recommended</p>
                        </div>
                        <h3 className = 'compare-panel-title-rec'>Comprehensive Everyday Plus</h3>
                        <p className = 'compare-panel-text'>
                            Comprehensive policy covers your vehicle for accident, fire or theft
                            and your liability for damage to other peoples' property.
                        </p>
                        <div className = 'compare-btn-wrap'>
                            <input type = 'button' className = 'compare-btn' onClick = { () => angryReact() }
                                value = 'Full Policy' id = 'fp-btn' />
                            <input type = 'button' className = 'compare-btn' onClick = { () => angryReact() }
                                value = 'Buy Now' id = 'compare-bn-btn' />
                        </div>
                    </div>

                    <div className = 'compare-panel'>
                        <h3 className = 'compare-panel-title'>Third Party Property Damage</h3>
                        <p className = 'compare-panel-text'>
                            Third Party Property Damage policy covers your liability for damage to
                            other peoples' property
                        </p>
                        <div className = 'compare-btn-wrap'>
                            <input type = 'button' className = 'compare-btn' onClick = { () => angryReact() }
                                value = 'Full Policy' id = 'fp-btn' />
                            <input type = 'button' className = 'compare-btn' onClick = { () => angryReact() }
                                value = 'Buy Now' id = 'compare-bn-btn' />
                        </div>
                    </div>

                    <div className = 'compare-panel'>
                        <h3 className = 'compare-panel-title'>Third Party Fire and Theft Damage</h3>
                        <p className = 'compare-panel-text'>
                            Third Party F&amp;T policy covers your vehicle for fire and theft and
                            your liability for damage to other peoples property.
                        </p>
                        <div className = 'compare-btn-wrap'>
                            <input type = 'button' className = 'compare-btn' onClick = { () => angryReact() }
                                value = 'Full Policy' id = 'fp-btn' />
                            <input type = 'button' className = 'compare-btn' onClick = { () => angryReact() }
                                value = 'Buy Now' id = 'compare-bn-btn' />
                        </div>
                    </div>


                </div>
            </div>

            <div className = 'compare-graph-container'>
                <img src = { compare_graph } className = 'compare-graph-img' />
            </div>

            <div className = 'perks-wrapper'>
                <h3 className = 'perks-title'>
                    Enjoy Perks with Turners Car Insurance
                </h3>

                <div className = 'perks-container'>

                    <div className = 'perk-top'>
                        <div className = 'perk-wrap'>
                            <img className = 'perks-img' src = { flybuys } />
                            <p className = 'perks-text'>
                                Receive Flybuys points when you insure your car with Turners Cars.
                            </p>
                        </div>

                        <div className = 'perk-wrap'>
                            <img className = 'perks-img' src = { airpoints } />
                            <p className = 'perks-text'>
                                Register your Airpoints number with us to get rewarded when you insure or buy a car.
                            </p>
                        </div>

                        <div className = 'perk-wrap'>
                            <img className = 'perks-img' src = { supercheap } />
                            <p className = 'perks-text'>
                                We've teamed up with Supercheap Auto to keep giving you perks, even after your purchase.
                            </p>
                        </div>
                    </div>

                    <div className = 'perk-bot'>

                        <div className = 'perk-wrap'>
                            <h5 className = 'perk-title'>Online Discount</h5>
                            <p className = 'perks-text'>
                                Buy your insurance online and receive up to a $50 discount.
                            </p>
                        </div>

                        <div className = 'perk-wrap'>
                            <h5 className = 'perk-title'>Swap to Turners Insurance</h5>
                            <p className = 'perks-text'>
                                Already have insurance and are thinking of making a change?
                                We'll make it easy for you.
                            </p>
                        </div>

                        <div className = 'perk-wrap'>
                            <h5 className = 'perk-title'>Online Account Management</h5>
                            <p className = 'perks-text'>
                                Need to make some quick changes to your insurance? Manage it all online!
                            </p>
                        </div>

                    </div>
                    
                    
                    
                </div>
            </div>

            <div className = 'insurance-faq'>
                <h3 className = 'insurance-faq-title'>FAQ's about Car Insurance</h3>
                <input type = 'button' className = 'insurance-faq-btn'
                    value = 'Comprehensive Everyday Plus' onClick = { () => angryReact() } />
                <input type = 'button' className = 'insurance-faq-btn'
                    value = 'Third Party Property Damage' onClick = { () => angryReact() } />
                <input type = 'button' className = 'insurance-faq-btn'
                    value = 'Third Party Fire and Theft Damage' onClick = { () => angryReact() } />
                <input type = 'button' className = 'insurance-faq-btn'
                    value = 'Mechanical Breakdown Insurance' onClick = { () => angryReact() } />
            </div>

        </div>
    )
}

export default Insurance;
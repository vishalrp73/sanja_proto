import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import './pageCSS/getQuote.css';

import { useEffect } from 'react';

import CoverDetails from './quote/coverDetails';
import YourQuote from './quote/yourQuote';
import BuyOnline from './quote/buyOnline';

import Stepper from '../components/stepper/stepper';


const GetQuote = () => {
    
    let location = useLocation();

    useEffect(() =>{
        console.log('Route switched');
        console.log(location.pathname);
        console.log(location);
    }, [location])

    return (
        <div className = 'get-quote-wrapper'>
            
            <h1 className = 'core-quote-title'>
                Car Insurance Quick Quote
            </h1>

            <Router>

                <Stepper />

                <div className = 'quote-route-wrap'>

                    <Switch>
                        <Route exact path = '/getQuote.js'>
                            <CoverDetails />
                        </Route>

                        <Route exact path = '/yourQuote.js'>
                            <YourQuote />
                        </Route>

                        <Route exact path = '/buyOnline.js'>
                            <BuyOnline />
                        </Route>
                    </Switch>
                
                </div>


            </Router>
        </div>
    )
}

export default GetQuote;
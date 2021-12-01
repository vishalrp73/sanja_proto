import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './pages/home';
import Insurance from './pages/insurance';
import GetQuote from './pages/getQuote';
import Success from './pages/success';
import EditQuote from './pages/editQuote';
import TY from './components/ty/ty';

import Chatbot from './components/chatbot/chatbot';


function App() {

  return (
    <div className="App">

      <Router>
      
        <div className = 'content-body-container'>

          <Header /> 
          <Chatbot />

          <div className = 'core-wrapper'>

            <Switch>
              <div className = 'core-content-container'>
                <Route exact path = '/'>
                  <Home />
                </Route>

                <Route exact path = '/insurance.js'>
                  <Insurance />
                </Route>

                <Route exact path = '/getQuote.js'>
                  <GetQuote />
                </Route>

                <Route exact path = '/success.js'>
                  <Success />
                </Route>

                <Route exact path = '/editQuote.js'>
                  <EditQuote />
                </Route>

                <Route exact path = '/thanks.js'>
                  <TY />
                </Route>
              </div>
            </Switch>

          <Footer />
          </div>


        </div>
        

      </Router>

    </div>
  );
}

export default App;
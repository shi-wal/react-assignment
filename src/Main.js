import React, { Component } from 'react';
import App from './App';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
// import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Main extends Component {   

    render() {
        return (
            <Router>
                <Route exact path='/' render={() => <App />} />
                <Route exact path='/about' render={() => <About />} />
                <Route exact path='/service' render={() => <Service />} />
                <Route exact path='/contact' render={() => <Contact />} />
            </Router>
        )
    }
}

export default Main;
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Nav from './Nav';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <div className="container">
                        <Route exact path='/' component={Home} /> 
                        <Route path='/popular' component={Popular} />
                        <Route path='/battle' component={Battle} />
                    </div>
                </div>
            </Router>
        )
    }   
}

module.exports = App;
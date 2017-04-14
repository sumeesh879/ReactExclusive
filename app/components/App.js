import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} /> 
                        <Route path='/popular' component={Popular} />
                        <Route path='/battle' component={Battle} />
                        {/*For Invalid routes - render is given with a function which returns JSX*/}
                        <Route render = { function() { 
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }   
}

module.exports = App;
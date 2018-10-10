import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/index';
import Landing from './components/landing/index';
import Details from './components/details/index';
import RSVP from './components/rsvp/index';
import Story from './components/story/index';
import NOLA from './components/nola/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={props => (
              <Navigation>
                <Landing {...props} />
              </Navigation>
            )}
          />
          <Route
            path="/details"
            render={props => (
              <Navigation>
                <Details {...props} />
              </Navigation>
            )}
            />
          <Route
            path="/RSVP"
            render={props => (
              <Navigation>
                <RSVP {...props} />
              </Navigation>
            )}
            />
          <Route
            path="/our-story"
            render={props => (
              <Navigation>
                <Story {...props} />
              </Navigation>
            )}
            />
          <Route
            path="/NOLA"
            render={props => (
              <Navigation>
                <NOLA {...props} />
              </Navigation>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

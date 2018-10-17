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
  constructor(props) {
    super(props);
    this.state = {
      blur: false,
    }
    this.toggleBlur = this.toggleBlur.bind(this);
  }
  toggleBlur() {
    this.setState(state => ({ blur: !state.blur }), () => console.log('called!', this.state.blur));
  }
  render() {
    const { blur } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={props => (
              <Navigation toggleBlur={this.toggleBlur}>
                <Landing {...props} blur={blur} />
              </Navigation>
            )}
          />
          <Route
            path="/details"
            render={props => (
              <Navigation toggleBlur={this.toggleBlur}>
                <Details {...props} blur={blur} />
              </Navigation>
            )}
            />
          <Route
            path="/RSVP"
            render={props => (
              <Navigation toggleBlur={this.toggleBlur}>
                <RSVP {...props} blur={blur} />
              </Navigation>
            )}
            />
          <Route
            path="/our-story"
            render={props => (
              <Navigation toggleBlur={this.toggleBlur}>
                <Story {...props} blur={blur} />
              </Navigation>
            )}
            />
          <Route
            path="/NOLA"
            render={props => (
              <Navigation toggleBlur={this.toggleBlur}>
                <NOLA {...props} blur={blur} />
              </Navigation>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

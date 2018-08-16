import React, { Component } from 'react';
import saveTheDate from './assets/save-the-date.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="center-contents">
        <img className="screen-width-img" src={saveTheDate} alt="save the date" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import platzi from './platzi.png'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
console.log(logo)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </CSSTransitionGroup>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

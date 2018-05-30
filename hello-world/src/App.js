import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import platzi from './platzi.png'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
console.log(logo)
class App extends Component {

  state = {
    logo: logo,
  }
  onClick() {
    this.setState({
      logo: platzi,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <img
              key={this.state.logo}
              src={this.state.logo}
              className="App-logo"
              alt="logo"
            />
          </CSSTransitionGroup>
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.onClick.bind(this)}>Click me!</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

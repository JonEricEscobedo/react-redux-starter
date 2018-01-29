// @flow
import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component<*> {
  componentDidMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(results => console.log(results))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="img/logo.svg" className="App-logo" alt="logo" />
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

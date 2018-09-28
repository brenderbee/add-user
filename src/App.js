import React, { Component } from 'react';
import './App.css';
import { Login, Main } from './assets/components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Main />
      </div>
    );
  }
}

export default App;

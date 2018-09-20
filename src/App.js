import React, { Component } from 'react';
import './App.css';
import { Table, ModalConductor } from './assets/components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
        <ModalConductor />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavBar></AppNavBar>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;

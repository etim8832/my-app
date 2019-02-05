import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';

class App extends Component {
  render() {
    return (
      <div className="bg_body">
        <Login />
      </div>
    );
  }
}

export default App;

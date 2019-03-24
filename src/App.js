import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { withRouter } from 'react';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Login />
        
      </div>
    )
    }
}

export default App;

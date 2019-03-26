import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/Login'
import UserPage from './components/UserPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Login}/>
        <Route path="/userhome" component={UserPage}/>
      </div>
    )
    }
}

export default App;
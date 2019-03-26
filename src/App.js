import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/Login'
import UserPage from './components/UserPage'


// FIXME: reverse the routes after we fix login (testing user page for now)
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/userHome" component={Login}/>
        <Route path="/" component={UserPage}/>
      </div>
    )
    }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login'
import UserPage from './components/UserPage'

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="App">
        <NavBar auth={auth} />
        <Route exact path="/" render={(props) => !auth.isAuthenticated() ? <Login {...props} auth={auth} /> : <Redirect to="/home" />}/>
        <Route path="/home" component={(props) => auth.isAuthenticated() ? <UserPage {...props} auth={auth} /> : <Redirect to="/" />}/>
      </div>
    )
    }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login'
import UserPage from './components/UserPage'
import Favorites from './components/Favorites';
import NewSearch from './components/NewSearch';

class App extends Component {
  render() {
    const { auth } = this.props;
    console.log(auth.isAuthenticated());
    return (
      <div className="App">
        <NavBar auth={auth} />
        <Route path="/favorites" component={Favorites}/>
        <Route path="/newsearch" component={NewSearch}/>
        <Route exact path="/" render={(props) => !auth.isAuthenticated() ? <UserPage {...props} auth={auth} /> : <Redirect to="/home" />}/>
        <Route path="/home" component={(props) => auth.isAuthenticated() ? <NewSearch {...props} auth={auth} /> : <Redirect to="/" />}/>
      </div>
    )
    }
}

export default App;
        
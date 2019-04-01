import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import { history } from "./utils";
import { BrowserRouter as Router } from "react-router-dom";

const App = props => {
  const { auth } = props;
  const [isLoggedIn, setLoggedIn] = useState(auth.isAuthenticated());

  return (
    <div className="App">
      <NavBar auth={auth} isAuthenticated={isLoggedIn} />
      <Route
        exact
        path="/"
        render={props =>
          !isLoggedIn ? (
            <Login {...props} auth={auth} loggedIn={setLoggedIn} />
          ) : (
            <Redirect to="/home" />
          )
        }
      />
      <Route exact path="/logout" render={props => <Redirect to="/home" />} />
      <Route
        path="/home"
        component={props =>
          isLoggedIn ? <UserPage {...props} auth={auth} /> : <Redirect to="/" />
        }
      />
    </div>
  );
};

export default App;

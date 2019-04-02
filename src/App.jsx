import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import Starred from "./components/Starred";

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
      <Route
        path="/starred"
        component={props =>
          isLoggedIn ? <Starred {...props} auth={auth} /> : <Redirect to="/" />
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

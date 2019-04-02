import React, { useState } from "react";
import GitHubLogin from "react-github-login";
import { Redirect } from "react-router-dom";
import "../../src/App.css";

// TODO: put in a config file? idk. its just one thing
const clientId = "6ef3a0bce89af9b367d4";

const redirectUri = process.env.REACT_APP_CALLBACK || "http://localhost:3000/";

const Login = props => {
  const onSuccess = async ({ code }) => {
    try {
      const { auth } = props;
      await auth.login(code);
      props.loggedIn(true);
    } catch (error) {
      alert(error);
    }
  };

  const onFailure = response => console.error(response);

  return (
    <GitHubLogin
      scope="user:email public_repo gist"
      clientId={clientId}
      redirectUri={redirectUri}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default Login;

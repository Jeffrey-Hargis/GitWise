import React from "react";
import GitHubLogin from "react-github-login";
import { github } from "../config";

import "../../src/App.css";

const { clientId, redirectUri, scope } = github;

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
      scope={scope}
      clientId={clientId}
      redirectUri={redirectUri}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default Login;

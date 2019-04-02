import React from "react";
import GitHubLogin from "react-github-login";
import { Row, Col, Card, Container } from "react-bootstrap";
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
    <Container style={{ width: "100vw" }}>
      <Row className="justify-space-between">
        <Col>
          <h3>Welcome to GitWise</h3>
          <p>
            We are an app that utilizes GitHub’s API to make searching{" "}
            <b>fun</b>. So, if you’re yearning to start a project that you’re
            not quite sure exists or need some inspiration, just search with
            GitWise! You can even star repos directly from our app, or tweet
            your favorites for your friends to see!
          </p>
        </Col>
        <Col>
          <Card border="dark" style={{ width: "22rem" }}>
            <Card.Header>LOGIN/SIGN UP</Card.Header>
            <Card.Body className="text-center">
              <GitHubLogin
                scope={scope}
                className="btn btn-dark"
                clientId={clientId}
                redirectUri={redirectUri}
                onSuccess={onSuccess}
                onFailure={onFailure}
                buttonText={
                  <div>
                    <i className="fab fa-github" style={{ marginRight: 5 }} />
                    <span>Sign in with Github</span>
                  </div>
                }
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

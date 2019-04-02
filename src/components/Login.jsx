import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GitHubLogin from 'react-github-login';
import { Redirect } from "react-router-dom";
import '../../src/App.css'

// TODO: put in a config file? idk. its just one thing
const clientId =
  process.env.REACT_APP_GITHUB_CLIENT_ID || "a57a1c87aad672437c55";

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
        <div className="container mx-auto">
            <Row>
                <Col className="text-center ml-2 mt-5" xs={8} md={6} >
                    <h3>Welcome to GitWise!</h3> <hr />
                    This is a website that utilizes GitHub's API to render repositories that you're curious about. 
                    This makes it easy for you to search about different topics using <i>keywords</i>. 
                    So, if you're yearning to start a project that you're not quite sure exists, you can use this website to double check
                    or if you're needing help on something specific, it'll be a quick search away. 
                    You'll even be able to favorite repos that will automatically reflect on your GitHub account! 
                    Sign in to GitWise using the link to the right. 
                </Col>
                <Col className="m-auto p-5">
                     <Button className="btn btn-dark">
                        <i class="fab fa-github fa-2x"></i>
                        <GitHubLogin className="btn btn-dark"
                            scope="user:email public_repo gist"
                            clientId={clientId}
                            redirectUri={redirectUri}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            />
                    </Button>
                </Col>
            </Row>
        </div>

  );
};

export default Login;

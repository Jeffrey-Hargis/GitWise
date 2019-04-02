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
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sed harum deleniti delectus, 
                recusandae vero, odit sint quae adipisci unde magnam, 
                a et nostrum! A, asperiores. Non totam eos qui et.
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sed harum deleniti delectus, 
                recusandae vero, odit sint quae adipisci unde magnam, 
                a et nostrum! A, asperiores. Non totam eos qui et.
                </Col>
                <Col>
                <Card border="dark" style={{ width: '22rem' }}>
                    <Card.Header>LOGIN/SIGN UP</Card.Header>
                    <Card.Body>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
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
                        
                    </Form>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </div>
    )
}


export default Login;


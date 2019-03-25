import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 
// import axios from 'axios';
// import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import '../../src/App.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state ={
            username: "",
            password: "",
            redirect: false
        }
    }
    render() {

        return (
            <div className="container d-inline-flex">
                <Col className="text-center ml-5 mt-5 d-none d-sm-block">
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sed harum deleniti delectus, 
                recusandae vero, odit sint quae adipisci unde magnam, 
                a et nostrum! A, asperiores. Non totam eos qui et.
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sed harum deleniti delectus, 
                recusandae vero, odit sint quae adipisci unde magnam, 
                a et nostrum! A, asperiores. Non totam eos qui et.
                </Col>
                <Col className="ml-5 ">
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
                        <Button variant="dark" type="submit">
                        Submit
                        </Button>
                        <Button className="ml-2" variant="dark" type="submit">
                        Sign Up
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
                </Col>
            </div>
        )
    }
    

}

export default Login;
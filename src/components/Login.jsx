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
            <div className="container d-inline-flex ">
                <Col>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sed harum deleniti delectus, 
                recusandae vero, odit sint quae adipisci unde magnam, 
                a et nostrum! A, asperiores. Non totam eos qui et.
                </Col>
                <Col>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </div>
        )
    }
    

}

export default withRouter(Login);
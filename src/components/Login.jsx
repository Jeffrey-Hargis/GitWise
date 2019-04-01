import React, { Component } from 'react'; 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GitHubLogin from 'react-github-login';
import '../../src/App.css'

// TODO: Jeff, replace with ur own
// TODO: put in a config file? idk. its just one thing
const clientId = "6ef3a0bce89af9b367d4";

// TODO: Jeff, this will change once you actually deploy it
// TODO: I'm not sure if you are actually required to set it (but probably, but try without it anyway)
const redirectUri = "http://localhost:3000/";

class Login extends Component {

    onSuccess = async ({code}) => {
        console.log("Demo Day!!!")
        const { auth } = this.props;
        await auth.login(code);
    };

    onFailure = async ({code}) => {
        console.log("fail!!!")
        console.log(code)
    };
    
    onRequest = (stuff)=>{
        console.log(stuff)
    }

    render() {
        console.log("Demo Day!!!")

    
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
                        clientId={clientId}
                        redirectUri={redirectUri}
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        onRequest={this.onRequest}
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
    

}

export default Login;
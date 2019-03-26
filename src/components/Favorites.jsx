import React, { Component } from 'react'; 
import { Link, Switch, Route, withRouter } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './imgs/gitwisecat.png'

class Favorites extends Component {
    render() {

        return (
            <div>
            <Container className="border mx-auto">
                <Row className="border">
                    <Col className="border-right text-center" sm={4} md={2}>
                    <Col xs={3} md={4}>
                    <img
                        alt=""
                        src={logo}
                        width="75"
                        height="75"
                        className="rounded-circle ml-4 mt-3"
                    />
                    </Col>
                        Name <br />
                        GitHub URL <br />
                        Favorites <br />
                        <Link to="/newsearch">SEARCH??</Link>
                    </Col>
                    <Col className="text-center mt-5" sm={8} md={10}>
                        <h1>FAVORITES</h1>
                        <div className="w-75 mx-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus natus deserunt provident ipsa velit libero consequatur impedit doloremque esse! Laboriosam distinctio consequatur exercitationem aperiam assumenda sed sequi laudantium maiores? Ratione.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus magni, numquam architecto aliquam inventore eaque perferendis consequuntur? Dignissimos in quam itaque! Officiis quisquam ullam pariatur totam, nulla dolorum amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit sint commodi quaerat ipsum optio repudiandae, natus illum magni. Temporibus obcaecati inventore quasi, delectus reiciendis maxime ipsum illum maiores animi.
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Favorites; 
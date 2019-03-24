import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar'
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import logo from './imgs/gitwisecat.png';


class NavBar extends Component {

    render() {

    return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" className="d-inline-flex">
      <img
        alt=""
        src={logo}
        width="60"
        height="50"
        className="d-inline-flex align-top"
      />
      <h2>GITWISE</h2>
    </Navbar.Brand>
  </Navbar> 
    )
}
}

  export default withRouter(NavBar);  
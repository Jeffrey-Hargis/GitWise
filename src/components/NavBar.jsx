import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar'
import logo from './images/gitwisecat.png';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const USER_QUERY = gql`
  {
    viewer {
      login
      starredRepositories {
        totalCount
      }
    }
  }
`;

class NavBar extends Component { 
  
  render() {

    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/" className="d-inline-flex">
          <img
            alt="logo"
            src={logo}
            width="60"
            height="50"
            className="d-inline-flex align-top"
          />
          <h2>GITWISE</h2>
        </Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="d-inline-flex">
              <ButtonToolbar>
                {[DropdownButton].map((DropdownType, idx) => (
                  <DropdownType
                    size="sm"
                    variant="dark"
                    title=""
                    id={`dropdown-button-drop-${idx}`}
                    key={idx}
                  >
                    <Dropdown.Item className="text-dark">LOGOUT</Dropdown.Item>
                  </DropdownType>
                ))}
              </ButtonToolbar>
              <h5>HELLO, ASHLEY!</h5> 
              {/* {this.props.auth.isAuthenticated() ? <Query query={USER_QUERY}>
            {({ data }) => {
                return <h4>{data.viewer.login} - {data.viewer.starredRepositories.totalCount}</h4>
            }}
            </Query> : null}  */} 
              </Navbar.Text>
            </Navbar.Collapse>
      </Navbar> 
    )
  }
}

  export default NavBar;  


import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/gitwisecat.png';
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
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="d-inline-flex">
          <img
            alt="logo"
            src={logo}
            width="60"
            height="50"
            className="d-inline-flex align-top"
          />
          <h2>GITWISE</h2>
          {this.props.auth.isAuthenticated() ? <Query query={USER_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return null;
                return <h4>{data.viewer.login} - {data.viewer.starredRepositories.totalCount}</h4>
            }}
          </Query> : null}
        </Navbar.Brand>
      </Navbar> 
    )
  }
}

  export default NavBar;  
import React from "react";
import { Navbar, NavDropdown, Spinner } from "react-bootstrap";
import logo from "../../images/gitwisecat.png";
import { Query } from "react-apollo";
import { USER_QUERY } from "./queries";

const NavBar = props => (
  <Navbar bg="dark" variant="dark" className="justify-content-between">
    <Navbar.Brand href="/home" className="d-inline-flex">
      <img
        src={logo}
        alt="logo"
        width="52"
        height="42"
        className="d-inline-flex align-top"
      />
      <h2>{"  "}GitWise</h2>
    </Navbar.Brand>
    {props.isAuthenticated ? (
      <Query query={USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Spinner
                animation="grow"
                role="status"
                style={{ marginRight: 30 }}
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            );
          if (error) return null;
          return (
            <NavDropdown
              key="dropdown"
              title={
                <img
                  style={{
                    width: 40,
                    borderRadius: 20
                  }}
                  alt={data.viewer.login}
                  src={data.viewer.avatarUrl}
                />
              }
              id="gitwise-nav-dropdown"
            >
              <NavDropdown.Header>
                Signed in as <b>{data.viewer.login}</b>
              </NavDropdown.Header>
              <NavDropdown.Item
                onClick={() => {
                  props.auth.logout();
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          );
        }}
      </Query>
    ) : null}
  </Navbar>
);

export default NavBar;

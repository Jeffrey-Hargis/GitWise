import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { DebounceInput } from "react-debounce-input";
import { Spinner, Card, Navbar } from "react-bootstrap";
import StackGrid from "react-stack-grid";
import { SEARCH_QUERY, STAR_REPO, UNSTAR_REPO } from "./queries";

class UserPage extends Component {
  state = { query: "squirrel" };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={this.handleChange}
          placeholder="Type here to start searching..."
          style={{
            width: "100vw",
            height: "80px",
            fontSize: 35,
            paddingLeft: "2vw"
          }}
        />
        <Query query={SEARCH_QUERY} variables={{ query }}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div
                  className="text-center"
                  style={{ height: "100vh", paddingTop: "30vh" }}
                >
                  <Spinner animation="grow" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              );
            if (error) return `Error! ${error.message}`;

            if (data.search.nodes.length <= 0) {
              return (
                <div
                  className="text-center"
                  style={{ height: "100vh", paddingTop: "15vh" }}
                >
                  <div>
                    <span style={{ fontSize: 140 }}>😞</span>
                  </div>
                  <h2>No Results!</h2>
                </div>
              );
            }

            const width = 222;
            const gutters = 15;

            return (
              <StackGrid
                columnWidth={width}
                gutterWidth={gutters}
                gutterHeight={gutters}
                style={{ marginTop: 10 }}
              >
                {data.search.nodes.map(
                  ({
                    id,
                    name,
                    description,
                    url,
                    viewerHasStarred,
                    owner: { login, avatarUrl },
                    stargazers: { totalCount }
                  }) => (
                    <Card key={id}>
                      <div style={{ overflow: "hidden" }}>
                        <Card.Img
                          variant="top"
                          style={{ width, height: width }}
                          src={avatarUrl}
                          href={url}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <a href={url} target="_blank" className="card-link">
                          Open
                        </a>
                        <Mutation
                          mutation={viewerHasStarred ? UNSTAR_REPO : STAR_REPO}
                        >
                          {(toggleFavorite, { loading }) => {
                            return (
                              <a
                                className="card-link"
                                href="#"
                                onClick={async e => {
                                  e.preventDefault();

                                  try {
                                    await toggleFavorite({
                                      variables: {
                                        input: {
                                          starrableId: id
                                        }
                                      }
                                    });
                                  } catch (error) {
                                    alert(error);
                                  }
                                }}
                              >
                                {loading
                                  ? "Loading..."
                                  : viewerHasStarred
                                  ? "Unstar"
                                  : "Star"}
                              </a>
                            );
                          }}
                        </Mutation>
                      </Card.Body>
                    </Card>
                  )
                )}
              </StackGrid>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default UserPage;

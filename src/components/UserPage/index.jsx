import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { DebounceInput } from "react-debounce-input";
import { Spinner, Card, Navbar, Badge } from "react-bootstrap";
import StackGrid from "react-stack-grid";
import { SEARCH_QUERY, STAR_REPO, UNSTAR_REPO } from "./queries";
import { TopSearches } from "../TopSearches";
import client from "../../services/firebase";

class UserPage extends Component {
  state = { query: "" };

  handleChange = event => {
    const query = event.target.value;
    this.setState({ query }, () => {
      if (query.length >= 3) {
        const newSearchRef = client.topSearches().push();
        newSearchRef.set({ search: query });
      }
    });
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <DebounceInput
          value={query}
          debounceTimeout={300}
          onChange={this.handleChange}
          placeholder="Type here to start searching..."
          autoFocus
          style={{
            width: "100vw",
            height: "80px",
            fontSize: 35,
            paddingLeft: "2vw",
            position: "sticky",
            top: "0px",
            zIndex: 1000
          }}
        />
        {query.length > 0 ? (
          <h2>
            <Badge
              onClick={() => this.setState({ query: "" })}
              style={{
                position: "absolute",
                top: 95,
                right: 15,
                zIndex: 10002
              }}
              variant="secondary"
            >
              Clear Search
            </Badge>
          </h2>
        ) : null}
        <Query query={SEARCH_QUERY} variables={{ query }}>
          {({ loading, error, data, refetch }) => {
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
                <TopSearches
                  onSearchClicked={query => this.setState({ query })}
                />
              );
            }

            const width = 222;
            const gutters = 15;

            return (
              <StackGrid
                columnWidth={width}
                gutterWidth={gutters}
                gutterHeight={gutters}
                style={{ marginTop: 15 }}
              >
                {data.search.nodes.map(
                  ({
                    id,
                    name,
                    description,
                    url,
                    viewerHasStarred,
                    forkCount,
                    owner: { login, avatarUrl },
                    stargazers: { totalCount }
                  }) => (
                    <Card key={id}>
                      <div style={{ overflow: "hidden" }}>
                        <a href={url} target="_blank">
                          <Card.Img
                            variant="top"
                            style={{ width, height: width }}
                            src={avatarUrl}
                            href={url}
                          />
                        </a>
                      </div>
                      <Card.Body>
                        <a href={url} target="_blank">
                          <Card.Title>{name}</Card.Title>
                        </a>
                        <a href={`https://github.com/${login}`} target="_blank">
                          <Card.Subtitle>{login}</Card.Subtitle>
                        </a>
                        <Card.Text>{description}</Card.Text>
                        <a
                          href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20repo:&url=${url}`}
                          target="_blank"
                          className="card-link"
                        >
                          Tweet
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
                                    refetch();
                                  } catch (error) {
                                    alert(error);
                                  }
                                }}
                              >
                                {loading
                                  ? "Loading..."
                                  : viewerHasStarred
                                  ? `Unstar  (${totalCount.toLocaleString()})`
                                  : `Star (${totalCount.toLocaleString()})`}
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

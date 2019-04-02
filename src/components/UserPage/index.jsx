import React, { Component } from "react";
import { Query } from "react-apollo";
import { DebounceInput } from "react-debounce-input";
import { Spinner, Badge } from "react-bootstrap";
import { SEARCH_QUERY } from "./queries";
import { TopSearches } from "../TopSearches";
import client from "../../services/firebase";
import { RepoList } from "../RepoList";

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

            return <RepoList repos={data.search.nodes} refetch={refetch} />;
          }}
        </Query>
      </div>
    );
  }
}

export default UserPage;

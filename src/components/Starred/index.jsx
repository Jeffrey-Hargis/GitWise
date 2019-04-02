import React from "react";
import { Query } from "react-apollo";
import { Spinner } from "react-bootstrap";
import { STARRED_QUERY } from "./queries";
import { RepoList } from "../RepoList";

const Starred = () => (
  <div>
    <Query query={STARRED_QUERY}>
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

        // flatten repos
        const repos = data.viewer.starredRepositories.edges.map(
          ({ node }) => node
        );

        return <RepoList repos={repos} refetch={refetch} />;
      }}
    </Query>
  </div>
);

export default Starred;

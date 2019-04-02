import React from "react";
import StackGrid from "react-stack-grid";
import { Card } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { STAR_REPO, UNSTAR_REPO } from "./queries";

export const RepoList = ({ repos, refetch }) => {
  const width = 222;
  const gutters = 15;

  return (
    <StackGrid
      columnWidth={width}
      gutterWidth={gutters}
      gutterHeight={gutters}
      style={{ marginTop: 15 }}
    >
      {repos.map(
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
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Card.Img
                  variant="top"
                  style={{ width, height: width }}
                  src={avatarUrl}
                  href={url}
                />
              </a>
            </div>
            <Card.Body>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Card.Title>{name}</Card.Title>
              </a>
              <a
                href={`https://github.com/${login}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Subtitle>{login}</Card.Subtitle>
              </a>
              <Card.Text>{description}</Card.Text>
              <a
                href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20repo:&url=${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Tweet
              </a>
              <Mutation mutation={viewerHasStarred ? UNSTAR_REPO : STAR_REPO}>
                {(toggleFavorite, { loading }) => {
                  return (
                    <a
                      className="card-link"
                      href="#toggleStar"
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
                          await refetch();
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
};

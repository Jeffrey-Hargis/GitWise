import gql from "graphql-tag";

export const STARRED_QUERY = gql`
  {
    viewer {
      id
      starredRepositories(first: 100) {
        totalCount
        edges {
          node {
            id
            name
            description
            url
            owner {
              login
              id
              avatarUrl
            }
            viewerHasStarred
            forkCount
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

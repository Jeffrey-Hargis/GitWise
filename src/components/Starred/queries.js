import gql from "graphql-tag";

export const STARRED_QUERY = gql`
  {
    viewer {
      id
      starredRepositories {
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
`;

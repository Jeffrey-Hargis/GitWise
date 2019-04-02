import gql from "graphql-tag";

export const SEARCH_QUERY = gql`
  query search($query: String!) {
    search(query: $query, type: REPOSITORY, first: 50) {
      nodes {
        ... on Repository {
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
`;

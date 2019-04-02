import gql from "graphql-tag";

export const USER_QUERY = gql`
  query UserInfo {
    viewer {
      id
      login
      avatarUrl
      starredRepositories {
        totalCount
      }
    }
  }
`;

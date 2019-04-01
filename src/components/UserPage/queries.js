import gql from "graphql-tag";

export const SEARCH_QUERY = gql `
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
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export const STAR_REPO = gql `
  mutation StarRepo($input: AddStarInput!) {
    addStar(input: $input) {
      clientMutationId
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const UNSTAR_REPO = gql `
  mutation UnstarRepo($input: RemoveStarInput!) {
    removeStar(input: $input) {
      clientMutationId
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
import gql from "graphql-tag";

export const STAR_REPO = gql`
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

export const UNSTAR_REPO = gql`
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

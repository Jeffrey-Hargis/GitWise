import ApolloClient from 'apollo-boost';

export const githubClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: "bearer 1bb9cb8f4e869715105a7f9781f99a4a9dc1a4e5"
      }
    });
  },
});
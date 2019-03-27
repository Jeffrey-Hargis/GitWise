import ApolloClient from 'apollo-boost';

export const githubClient = (auth) => new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `bearer ${auth.getAccessToken()}`
      }
    });
  },
});
import ApolloClient from "apollo-boost";

export const githubClient = auth =>
  new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
      if (!auth.getAccessToken()) {
        // hopefully this doesn't infinite loop...
        auth.logout();
      } else {
        operation.setContext({
          headers: {
            authorization: `bearer ${auth.getAccessToken()}`
          }
        });
      }
    }
  });

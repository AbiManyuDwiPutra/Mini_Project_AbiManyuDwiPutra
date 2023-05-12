import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://sharp-worm-41.hasura.app/v1/graphql",
  // cache: new InMemoryCache(),
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret":
      "hRrPHmmGno0TswB3qV6i3wjNuqvSybzcrSFeAmmAZhCVkIYhAEFuaxk9cRTpyJaY",
  },
});

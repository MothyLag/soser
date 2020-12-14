import { ApolloClient } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "apollo-link-ws";

//const server = "45.82.72.247";
const server = "localhost";
const GRAPHQL_URL = process.env.API_URL
  ? process.env.API_URL
  : `http://${server}:4000`;

const wsLink = () => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  return new WebSocketLink({
    uri: `ws://${server}:4000/subscriptions`,
    options: {
      reconnect: true,
      connectionParams: { Authorization: token },
    },
  });
};

const uploadLink = createUploadLink({
  uri: GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink(),
  authLink.concat(uploadLink)
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

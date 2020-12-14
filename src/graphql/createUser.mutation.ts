import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      ctrlNumber
      token
    }
  }
`;

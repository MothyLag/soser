import { gql } from "@apollo/client";

export const LOG_IN = gql`
  query Login($credentials: UserLoginInput!) {
    login(credentials: $credentials) {
      ctrlNumber
      token
    }
  }
`;

import { gql } from "@apollo/client";

export const CREATE_DATA = gql`
  mutation createData($newData: CreateDataInput!) {
    createData(newData: $newData) {
      _id
    }
  }
`;

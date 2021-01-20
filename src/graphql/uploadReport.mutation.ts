import gql from "graphql-tag";

const UPLOAD_REPORT = gql`
  mutation uploadReport($file: Upload!) {
    uploadReport(file: $file)
  }
`;

export default UPLOAD_REPORT;

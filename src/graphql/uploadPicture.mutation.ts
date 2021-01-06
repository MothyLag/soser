import gql from "graphql-tag";

const UPLOAD_PICTURE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default UPLOAD_PICTURE;

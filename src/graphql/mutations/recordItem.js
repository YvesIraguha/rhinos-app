import { gql } from "@apollo/client";

export default gql`
  mutation addItem($input: AddItemInput!) {
    addItem(input: $input) {
      name
      itemId
      location {
        sector
        district
      }
      status
      sk
      updatedAt
    }
  }
`;

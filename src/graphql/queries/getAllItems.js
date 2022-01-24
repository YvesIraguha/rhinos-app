import { gql } from "@apollo/client";

const getAllItems = gql`
  query getAllItems($status: String!) {
    getAllItems(status: $status) {
      itemId
      name
      sk
      reward
      location {
        district
        sector
        coordinates {
          longitude
          latitude
        }
      }
    }
  }
`;

export default getAllItems;

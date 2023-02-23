import { gql } from 'apollo-server-lambda';

const operationDefs = gql`
  type Query {
    listRestaurantTables(input: ListRestaurantTablesInput!): [RestaurantTable!]
  }
  input ListRestaurantTablesInput {
    restaurantId: ID!
  }
`;

export default operationDefs;

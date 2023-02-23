import { gql } from 'apollo-server-lambda';

const operationDefs = gql`
  type Query {
    getRestaurant(input: GetRestaurantInput!): Restaurant
  }
  input GetRestaurantInput {
    id: ID!
  }
`;

export default operationDefs;

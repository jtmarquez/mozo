import { gql } from 'apollo-server-lambda';

const operationDefs = gql`
  type Query {
    listProduct(input: ListProductInput!): [Product!]
  }
  input ListProductInput {
    restaurantId: ID!
  }
`;

export default operationDefs;

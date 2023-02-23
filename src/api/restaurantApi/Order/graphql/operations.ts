import { gql } from 'apollo-server-lambda';

const operationDefs = gql`
  type Query {
    listOrder(input: ListOrderInput!): [Order!]
    getOrder(input: GetOrderInput!): Order
  }
  input ListOrderInput {
    restaurantId: ID!
  }
  input GetOrderInput {
    id: ID!
  }
`;

export default operationDefs;

import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Restaurant {
    name: String
    tables: [RestaurantTable!]
    orders: [Order!]
    products: [Product!]
  }
`;

export default typeDefs;

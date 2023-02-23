import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Product {
    restaurant: Restaurant!
    orderProducts: [OrderProduct!]
    billProducts: [BillProduct!]
    type: ProductType!
    cost: Int!
  }
  enum ProductType {
    Entry
    MainDish
    Dessert
    Salad
    Coctel
    Drink
  }
`;

export default typeDefs;

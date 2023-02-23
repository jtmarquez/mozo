import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type OrderProduct {
    order: Order!
    product: Product!
  }
`;

export default typeDefs;

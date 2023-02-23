import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type BillProduct {
    bill: Bill!
    product: Product!
  }
`;

export default typeDefs;

import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Bill {
    order: Order!
    billProducts: [BillProduct!]
    state: BillStates!
    cost: Int!
  }
  enum BillStates {
    Pending
    WaitingPayment
    Paid
    Finished
  }
`;

export default typeDefs;

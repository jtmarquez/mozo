import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Order {
    restaurant: Restaurant!
    orderProducts: [OrderProduct!]
    bills: [Bill!]
    state: OrderStates!
    totalCost: Int!
  }
  enum OrderStates {
    PendingProductRegistration
    PendingProductEnrollments
    WaitingPayment
    Finished
  }
`;

export default typeDefs;

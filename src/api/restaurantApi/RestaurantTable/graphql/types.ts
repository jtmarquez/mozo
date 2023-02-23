import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type RestaurantTable {
    state: RestaurantTableState!
    restaurant: Restaurant!
  }

  enum RestaurantTableState {
    Free
    Used
  }
`;

export default typeDefs;

import { gql } from "apollo-server-lambda";

const typeDef = gql`
  type Car {
    id: ID!
    model: Int!
    creationDate: String!
  }
`;

export default typeDef;
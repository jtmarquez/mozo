import { gql } from 'apollo-server-lambda';

const operationDefs = gql`
  type Query {
    getCar(input: GetCarInput!): Car!
  }
`;

export default operationDefs;

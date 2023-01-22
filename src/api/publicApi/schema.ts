import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "graphql-tools";
import Car from './Car';


const typeDefs = mergeTypeDefs([Car.typeDefs]);
const operationDefs = mergeTypeDefs([]);
const allDefs = mergeTypeDefs([typeDefs, operationDefs]);

const resolvers = mergeResolvers([]);

const gatewaySchema = makeExecutableSchema({
  typeDefs: allDefs,
  resolvers: { ...resolvers},
});

export default gatewaySchema;
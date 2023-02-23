import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from 'graphql-tools';
import Bill from './Bill';
import BillProduct from './BillProduct';
import Order from './Order';
import OrderProduct from './OrderProduct';
import Product from './Product';
import Restaurant from './Restaurant';
import RestaurantTable from './RestaurantTable';

const typeDefs = mergeTypeDefs([
  Bill.typeDefs,
  BillProduct.typeDefs,
  Order.typeDefs,
  OrderProduct.typeDefs,
  Product.typeDefs,
  Restaurant.typeDefs,
  RestaurantTable.typeDefs,
]);
const operationDefs = mergeTypeDefs([
  Order.operationDefs,
  Product.operationDefs,
  Restaurant.operationDefs,
  RestaurantTable.operationDefs,
]);
const allDefs = mergeTypeDefs([typeDefs, operationDefs]);

const resolvers = mergeResolvers([]);

const gatewaySchema = makeExecutableSchema({
  typeDefs: allDefs,
  resolvers: { ...resolvers },
});

export default gatewaySchema;

import { ApolloServer } from 'apollo-server-lambda';
import { Event } from 'libs/utils/graphqlTypes';
import { Context, Callback } from 'aws-lambda';
import schema from './schema';
import getConnection from 'src/services/config/db/getConnection';
import { Sequelize } from 'sequelize-typescript';

export interface ContextWrapper extends Context {
  connection: Sequelize | undefined;
}

const server = new ApolloServer({
  schema,
  formatError: (error) => error,
  formatResponse: (response: any) => {
    if (response.errors) {
      console.log(response);
    }
    return response;
  },
  context: async ({ event, context }) => {
    const sequelize = await getConnection();
    return {
      event,
      context,
      headers: event.headers,
      connection: sequelize,
    };
  },
});

exports.graphqlHandler = (
  event: Event,
  context: ContextWrapper,
  callback: Callback,
) => {
  const graphql = server.createHandler({
    expressGetMiddlewareOptions: {
      cors: {
        origin: '*',
      },
    },
  });

  try {
    return graphql(event, context, callback);
  } finally {
    context.connection?.close();
  }
};

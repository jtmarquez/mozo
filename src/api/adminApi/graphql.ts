import { ApolloServer } from 'apollo-server-lambda';
import { Event } from 'libs/utils/graphqlTypes';
import { Context, Callback } from 'aws-lambda';
import schema from './schema';

const server = new ApolloServer({
  schema,
  mockEntireSchema: true,
  formatError: (error) => error,
  formatResponse: (response: any) => {
    if (response.errors) {
      console.log(response);
    }
    return response;
  },
  context: async ({ event, context }) => {
    return {
      event,
      context,
      headers: event.headers,
    };
  },
});

exports.handler = function (
  event: Event,
  context: Context,
  callback: Callback,
) {
  const graphql = server.createHandler({
    expressGetMiddlewareOptions: {
      cors: {
        origin: '*',
      },
    },
  });
  return graphql(event, context, callback);
};

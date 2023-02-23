import { AwsLambdaRuntime } from '@serverless/typescript';
import { handlerPath } from '../../../libs/utils/handlerResolver';
import { provisionedConcurrency } from '../../../serverless.config/global.config';

const graphqlRestaurantApi = {
  handler: `${handlerPath(__dirname)}/graphql.graphqlHandler`,
  runtime: 'nodejs14.x' as AwsLambdaRuntime,
  provisionedConcurrency,
  events: [
    {
      httpApi: {
        method: 'POST',
        path: '/graphql-restaurant-api',
      },
    },
    {
      httpApi: {
        method: 'GET',
        path: '/graphql-restaurant-api',
      },
    },
  ],
};

export default graphqlRestaurantApi;

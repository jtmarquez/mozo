import { AwsLambdaRuntime } from '@serverless/typescript';
import { handlerPath } from '../../../libs/utils/handlerResolver';
import { provisionedConcurrency } from '../../../serverless.config/global.config';

const graphqlAdminApi = {
  handler: `${handlerPath(__dirname)}/graphql.handler`,
  runtime: 'nodejs14.x' as AwsLambdaRuntime,
  provisionedConcurrency,
  events: [
    {
      httpApi: {
        method: 'POST',
        path: '/graphql-admin-api',
      },
    },
    {
      httpApi: {
        method: 'GET',
        path: '/graphql-admin-api',
      },
    },
  ],
};

export default graphqlAdminApi;

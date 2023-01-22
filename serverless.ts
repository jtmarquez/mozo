import type { AWS } from '@serverless/typescript';
import apiFunctions from 'src/api';

const serverlessConfiguration: AWS = {
  service: 'sls',
  frameworkVersion: '3',
  useDotenv: true,
  package: {
    individually: true,
  },
  custom: {
    stage: '${opt:stage, "local"}',
    config: {
      local: {
        NODE_ENV: 'development',
      },
    },
    region: '${env:AWS_REGION}',
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: {
        // You can delete this setting if you dont use aws-sdk.
        // If you use it, this setting will exclude it from the bundle,
        // since its included inside the lambda by default
        forceExclude: 'aws-sdk',
      },
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    region: '${self:custom.region}' as any,
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_ENV:
        '${self:custom.config.${self:custom.stage}.NODE_ENV, "production"}',
      ENV: '${self:custom.stage}',
      REGION: '${self:custom.region}',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: {
    ...apiFunctions,
  },
};

module.exports = serverlessConfiguration;

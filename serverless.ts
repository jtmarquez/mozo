import type { AWS } from '@serverless/typescript';
import { region } from 'serverless.config/global.config';
import apiFunctions from 'src/api';

const serverlessConfiguration: AWS = {
  service: 'mozo',
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
    region,
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: {
        forceExclude: 'aws-sdk',
      },
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    region,
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
  },
  functions: {
    ...apiFunctions,
  },
};

module.exports = serverlessConfiguration;

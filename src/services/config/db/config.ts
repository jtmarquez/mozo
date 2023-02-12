import { SequelizeOptions } from 'sequelize-typescript';

const CURRENT_LAMBDA_FUNCTION_TIMEOUT = 15000;

const databaseConfig: SequelizeOptions = {
  repositoryMode: true,
  pool: {
    max: 2,
    min: 0,
    idle: 0,
    acquire: 3000,
    evict: CURRENT_LAMBDA_FUNCTION_TIMEOUT,
  },
};

export default databaseConfig;

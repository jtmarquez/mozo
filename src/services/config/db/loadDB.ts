import { Sequelize } from 'sequelize-typescript';
import databaseConfig from './config';

const loadDb = async () => {
  try {
    const uri = process.env.SEQUELIZE_URL!;
    const dbInstance = new Sequelize(uri, databaseConfig);
    await dbInstance.authenticate();
    console.log('Connection has been established successfully.');
    return dbInstance;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};

export default loadDb;

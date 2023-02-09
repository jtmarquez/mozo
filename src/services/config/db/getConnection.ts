import { Sequelize } from 'sequelize';
import loadDb from './loadDB';

let sequelize: Sequelize | undefined;

const getConnection = async () => {
  if (!sequelize) {
    sequelize = await loadDb();
  } else {
    sequelize.connectionManager.initPools();
    if (sequelize.connectionManager.hasOwnProperty('getConnection')) {
      // @ts-expect-error
      delete sequelize.connectionManager.getConnection;
    }
  }
  return sequelize;
};

export default getConnection;

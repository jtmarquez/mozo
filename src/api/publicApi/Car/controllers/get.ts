import { Sequelize } from 'sequelize-typescript';
import { create } from 'src/services/Restaurant';

const get = async (connection: Sequelize | undefined) => {
  const car = {
    id: 'aaabbb',
    model: 1123,
    creationDate: '123123',
  };
  console.log(connection?.models);
  if (connection) {
    const restaurant = await create(connection, {
      name: 'test',
    });
    console.log(restaurant);
  }
  return car;
};

export default get;

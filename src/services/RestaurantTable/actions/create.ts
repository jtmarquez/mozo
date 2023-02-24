import { DataBaseError } from 'libs/errors/errorWrapper';
import { CreateRestaurantTableArgs } from './types';
import { Sequelize } from 'sequelize-typescript';
import { RestaurantTable } from '../models';

const create = async (
  persistance: Sequelize,
  { restaurantId }: CreateRestaurantTableArgs,
) => {
  try {
    const restaurantTableRepository =
      persistance.getRepository(RestaurantTable);
    const restaurantTable = await restaurantTableRepository.create({
      restaurantId,
    });

    return restaurantTable;
  } catch (error) {
    throw new DataBaseError('Couldnt create restaurant table');
  }
};

export default create;

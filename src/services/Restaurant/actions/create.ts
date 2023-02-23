import { Sequelize } from 'sequelize-typescript';
import { CreateRestaurantArgs } from './types';
import { Restaurant } from '../models';
import { DataBaseError } from 'libs/errors/errorWrapper';

const create = async (sequelize: Sequelize, { name }: CreateRestaurantArgs) => {
  try {
    const restaurantRepository = sequelize.getRepository(Restaurant);
    const restaurant = await restaurantRepository.create({
      name,
    });

    return restaurant;
  } catch (error) {
    throw new DataBaseError('Couldnt create restaurant');
  }
};

export default create;

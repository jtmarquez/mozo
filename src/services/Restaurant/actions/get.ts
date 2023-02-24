import { Sequelize } from 'sequelize-typescript';
import { GetRestaurantArgs } from './types';
import { DataBaseError } from 'libs/errors/errorWrapper';
import { Restaurant } from '../models';

const get = async (persitance: Sequelize, { id }: GetRestaurantArgs) => {
  try {
    const restaurantRepository = persitance.getRepository(Restaurant);
    const restaurant = await restaurantRepository.findByPk(id);
    return restaurant;
  } catch (error) {
    throw new DataBaseError('Failed to get restaurant');
  }
};

export default get;

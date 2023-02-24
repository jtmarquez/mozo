import { DataBaseError } from 'libs/errors/errorWrapper';
import { ListProductArgs } from './types';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models';

const list = async (
  persitance: Sequelize,
  { restaurantId }: ListProductArgs,
) => {
  try {
    const productRepository = persitance.getRepository(Product);
    const products = await productRepository.findAll({
      where: {
        restaurantId,
      },
    });

    return products;
  } catch (error) {
    throw new DataBaseError('Failed to list restaurant products');
  }
};

export default list;

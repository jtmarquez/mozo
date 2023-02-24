import { Sequelize } from 'sequelize-typescript';
import { CreateProductArgs } from './types';
import { DataBaseError } from 'libs/errors/errorWrapper';
import { Product } from '../models';

const create = async (
  persistance: Sequelize,
  { name, cost, type, restaurantId }: CreateProductArgs,
) => {
  try {
    const productRepository = persistance.getRepository(Product);
    const product = await productRepository.create({
      name,
      cost,
      type,
      restaurantId,
    });

    return product;
  } catch (error) {
    throw new DataBaseError('Failed to create product');
  }
};

export default create;

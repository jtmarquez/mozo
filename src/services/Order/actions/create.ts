import { Sequelize } from 'sequelize-typescript';
import { CreateOrderArgs } from './types';
import { DataBaseError } from 'libs/errors/errorWrapper';
import { Order } from '../models';

const create = async (
  persistance: Sequelize,
  { restaurantId }: CreateOrderArgs,
) => {
  try {
    const orderRepository = persistance.getRepository(Order);
    const order = await orderRepository.create({
      restaurantId,
    });

    return order;
  } catch (error) {
    throw new DataBaseError('Failed to create order');
  }
};

export default create;

import { Sequelize } from 'sequelize-typescript';
import { GetOrderArgs } from './types';
import { Order } from '../models';
import { DataBaseError } from 'libs/errors/errorWrapper';

const get = async (persistance: Sequelize, { id }: GetOrderArgs) => {
  try {
    const orderRepository = persistance.getRepository(Order);
    const order = await orderRepository.findByPk(id);

    return order;
  } catch (error) {
    throw new DataBaseError('Failed to get order');
  }
};

export default get;

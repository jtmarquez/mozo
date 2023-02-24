import { Sequelize } from 'sequelize-typescript';
import { CreateOrderProductArgs } from './types';
import { DataBaseError } from 'libs/errors/errorWrapper';
import { OrderProduct } from '../models';

const create = async (
  persistance: Sequelize,
  { orderId, productId }: CreateOrderProductArgs,
) => {
  try {
    const orderProductRepository = persistance.getRepository(OrderProduct);
    const orderProduct = await orderProductRepository.create({
      orderId,
      productId,
    });

    return orderProduct;
  } catch (error) {
    throw new DataBaseError('Failed to create order product');
  }
};

export default create;

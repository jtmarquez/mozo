import { DataBaseError } from 'libs/errors/errorWrapper';
import { Sequelize } from 'sequelize-typescript';
import { CreateBillArgs } from './types';
import { Bill } from '../models';

const create = async (persistance: Sequelize, { orderId }: CreateBillArgs) => {
  try {
    const billRepository = persistance.getRepository(Bill);
    const bill = await billRepository.create({
      orderId,
    });

    return bill;
  } catch (error) {
    throw new DataBaseError('Failed to create Bill');
  }
};

export default create;

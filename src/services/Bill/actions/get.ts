import { DataBaseError } from 'libs/errors/errorWrapper';
import { Sequelize } from 'sequelize-typescript';
import { Bill } from '../models';
import { GetBillArgs } from './types';

const get = async (persistance: Sequelize, { id }: GetBillArgs) => {
  try {
    const billRepository = persistance.getRepository(Bill);
    const bill = await billRepository.findByPk(id);
    return bill;
  } catch (error) {
    throw new DataBaseError('Failed to get Bill');
  }
};

export default get;

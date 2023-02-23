import { ErrorType } from './types';

export class DataBaseError extends Error {
  errorCode;

  errorType;

  constructor(errorCode: string, errorType?: ErrorType) {
    super(errorCode);
    this.errorCode = errorCode;
    this.errorType = errorType;
    this.name = 'DataBaseError';
  }
}

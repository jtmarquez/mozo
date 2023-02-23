import { ContextWrapper } from '../../graphql';
import getCar from '../controllers/get';

const resolver = {
  Query: {
    getCar: async (_: any, __: any, contextValue: ContextWrapper) =>
      getCar(contextValue.connection),
  },
};

export default resolver;

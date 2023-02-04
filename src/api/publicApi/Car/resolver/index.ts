import getCar from '../controllers/get';

const resolver = {
  Query: {
    getCar: async () => getCar(),
  },
};

export default resolver;

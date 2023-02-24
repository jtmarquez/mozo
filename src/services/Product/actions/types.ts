import { ProductType } from 'src/services/config/enums/ProductType';

export interface CreateProductArgs {
  name: string;
  cost: number;
  type: ProductType;
  restaurantId: string;
}

export interface ListProductArgs {
  restaurantId: string;
}

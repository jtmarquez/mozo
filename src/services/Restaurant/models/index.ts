import { Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { Bill } from 'src/services/Bill/models';
import { Order } from 'src/services/Order/models';
import { Product } from 'src/services/Product/models';
import { RestaurantTable } from 'src/services/RestaurantTable/models';
import BaseModelEntity from 'src/services/config/entities/baseEntity';

@Table
export class Restaurant extends BaseModelEntity {
  @HasMany(() => RestaurantTable)
  restaurantTables: RestaurantTable[] | undefined;

  @HasMany(() => Product)
  products: Product[] | undefined;

  @HasMany(() => Bill)
  bills: Bill[] | undefined;

  @HasMany(() => Order)
  orders: Order[] | undefined;

  @Column({
    type: DataType.TEXT('medium'),
    allowNull: false,
  })
  name!: string;
}

import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { Bill } from 'src/services/Bill/models';
import { OrderProduct } from 'src/services/OrderProduct/models';
import { Restaurant } from 'src/services/Restaurant/models';
import BaseModelEntity from 'src/services/config/entities/baseEntity';
import { OrderStates } from 'src/services/config/enums/OrderStates';

@Table
export class Order extends BaseModelEntity {
  @ForeignKey(() => Restaurant)
  @Column({
    allowNull: false,
  })
  restaurantId!: string;

  @BelongsTo(() => Restaurant)
  restaurant!: Restaurant;

  @HasMany(() => OrderProduct)
  orderProducts: OrderProduct[] | undefined;

  @HasMany(() => Bill)
  bills: Bill[] | undefined;

  @Column({
    type: DataType.ENUM({ values: Object.values(OrderStates) }),
    allowNull: false,
    defaultValue: OrderStates.PendingProductRegistration,
  })
  state!: OrderStates;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  totalCost!: number;
}

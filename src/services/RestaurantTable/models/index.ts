import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { Restaurant } from 'src/services/Restaurant/models';
import BaseModelEntity from 'src/services/config/entities/baseEntity';
import { RestaurantTableState } from 'src/services/config/enums/RestaurantTableState';

@Table
export class RestaurantTable extends BaseModelEntity {
  @Column({
    type: DataType.ENUM({ values: Object.values(RestaurantTableState) }),
    defaultValue: RestaurantTableState.Free,
    allowNull: false,
  })
  state!: RestaurantTableState;

  @ForeignKey(() => Restaurant)
  @Column({ allowNull: false })
  restaurantId!: string;

  @BelongsTo(() => Restaurant)
  restaurant!: Restaurant;
}

import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { BillProduct } from 'src/services/BillProduct/models';
import { OrderProduct } from 'src/services/OrderProduct/models';
import { Restaurant } from 'src/services/Restaurant/models';
import BaseModelEntity from 'src/services/config/entities/baseEntity';
import { ProductType } from 'src/services/config/enums/ProductType';

@Table
export class Product extends BaseModelEntity {
  @ForeignKey(() => Restaurant)
  @Column({
    allowNull: false,
  })
  restaurantId!: string;

  @BelongsTo(() => Restaurant)
  restaurant!: Restaurant;

  @HasMany(() => OrderProduct)
  orderProducts: OrderProduct[] | undefined;

  @HasMany(() => BillProduct)
  billProducts: BillProduct[] | undefined;

  @Column({
    type: DataType.ENUM({ values: Object.values(ProductType) }),
    allowNull: false,
  })
  type!: ProductType;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cost!: number;
}

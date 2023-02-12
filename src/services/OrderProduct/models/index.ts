import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { Order } from 'src/services/Order/models';
import { Product } from 'src/services/Product/models';
import BaseModelEntity from 'src/services/config/entities/baseEntity';

@Table
export class OrderProduct extends BaseModelEntity {
  @BelongsTo(() => Order)
  order!: Order;

  @ForeignKey(() => Order)
  @Column({
    allowNull: false,
  })
  orderId!: string;

  @BelongsTo(() => Product)
  product!: Product;

  @ForeignKey(() => Product)
  @Column({
    allowNull: false,
  })
  productId!: string;
}

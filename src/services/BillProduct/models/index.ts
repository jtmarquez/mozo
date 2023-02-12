import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { Bill } from 'src/services/Bill/models';
import { Product } from 'src/services/Product/models';
import BaseModelEntity from 'src/services/config/entities/baseEntity';

@Table
export class BillProduct extends BaseModelEntity {
  @BelongsTo(() => Bill)
  bill!: Bill;

  @ForeignKey(() => Bill)
  @Column({
    allowNull: false,
  })
  billId!: string;

  @BelongsTo(() => Product)
  product!: Product;

  @ForeignKey(() => Product)
  @Column({
    allowNull: false,
  })
  productId!: string;
}

import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { BillProduct } from 'src/services/BillProduct/models';
import { Order } from 'src/services/Order/models';
import BaseModelEntity from 'src/services/config/entities/baseEntity';
import { BillStates } from 'src/services/config/enums/BillStates';

@Table
export class Bill extends BaseModelEntity {
  @BelongsTo(() => Order)
  order!: Order;

  @ForeignKey(() => Order)
  @Column({
    allowNull: false,
  })
  orderId!: string;

  @HasMany(() => BillProduct)
  billProducts: BillProduct[] | undefined;

  @Column({
    type: DataType.ENUM({ values: Object.values(BillStates) }),
    allowNull: false,
    defaultValue: BillStates.Pending,
  })
  state!: BillStates;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  cost!: number;
}

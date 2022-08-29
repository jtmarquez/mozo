import { Bill } from "src/services/Bill/models";
import { BasicModelEntity } from "src/services/config/baseModelEntity";
import { OrderProduct } from "src/services/OrderProduct/models";
import { ManyToOne, OneToMany } from "typeorm";

export class Order extends BasicModelEntity {
    @ManyToOne('Bill', 'order')
    bill!: Bill;

    @OneToMany('OrderProduct', 'order')
    orderProducts: OrderProduct[] | undefined;
}
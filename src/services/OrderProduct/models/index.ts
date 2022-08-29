import { BasicModelEntity } from "src/services/config/baseModelEntity";
import { Order } from "src/services/Order/models";
import { Product } from "src/services/Product/models";
import { ManyToOne } from "typeorm";

export class OrderProduct extends BasicModelEntity {
    @ManyToOne('Order', 'orderProduct')
    order!: Order;

    @ManyToOne('Product', 'orderProduct')
    product!: Product;
}
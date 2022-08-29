import { BasicModelEntity } from "src/services/config/baseModelEntity";
import { BillState } from "src/services/config/enums/BillState";
import { Order } from "src/services/Order/models";
import { Waiter } from "src/services/Waiter/models";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Bill extends BasicModelEntity {
    @ManyToOne('Waiter', 'bill', { nullable: true })
    waiter: Waiter | undefined;

    @OneToMany('Order', 'bill', { nullable: true })
    orders: Order[] | undefined;

    @Column({ type: "enum", enum: BillState, default: BillState.PendingPayment })
    state: BillState | undefined; 
}
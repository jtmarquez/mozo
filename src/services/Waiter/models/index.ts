import { Bill } from "src/services/Bill/models";
import { BasicModelEntity } from "src/services/config/baseModelEntity";
import { WaiterState } from "src/services/config/enums/WaiterState";
import { Restaurant } from "src/services/Restaurant/models";
import { Column, ManyToOne, OneToMany } from "typeorm";

export class Waiter extends BasicModelEntity {
    @Column('text')
    firstName!: string;
    
    @Column('text')
    lastName!: string;

    @Column({ type: 'enum', enum: WaiterState, default: WaiterState.Active })
    state: WaiterState | undefined;

    @ManyToOne('Restaurant', 'waiter')
    restaurant!: Restaurant;

    @OneToMany('Bill', 'waiter', { nullable: true })
    bills: Bill[] | undefined;
}
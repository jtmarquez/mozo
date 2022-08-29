import { BasicModelEntity } from "src/services/config/baseModelEntity";
import { Waiter } from "src/services/Waiter/models";
import { Product } from "src/services/Product/models";
import { Column, OneToMany } from "typeorm";

export class Restaurant extends BasicModelEntity {
    @Column('text')
    name!: string;

    @Column('text')
    address!: string;

    @Column('int')
    contactNumber!: number;
    
    @OneToMany('Waiter', 'restaurant')
    waiters: Waiter[] | undefined;

    @OneToMany('Product', 'restaurant')
    products: Product[] | undefined;
}
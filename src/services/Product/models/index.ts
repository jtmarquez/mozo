import { BasicModelEntity } from "src/services/config/baseModelEntity";
import { OrderProduct } from "src/services/OrderProduct/models";
import { Restaurant } from "src/services/Restaurant/models";
import { Column, ManyToOne, OneToMany } from "typeorm";

export class Product extends BasicModelEntity {
    @Column('text')
    name!: string;

    @Column('int')
    price!: number;

    @Column('text')
    description: string | undefined;

    @Column('text')
    photoUrl!: string;
    
    @ManyToOne('Restaurant', 'product')
    retaurant!: Restaurant;

    @OneToMany('OrderProduct', 'product')
    orderProducts: OrderProduct[] | undefined;
}
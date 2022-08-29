import { Bill } from "src/services/Bill/models";
import { BasicModelEntity } from "src/services/config/baseModelEntity";
import { Restaurant } from "src/services/Restaurant/models";
import { Column, ManyToOne, OneToMany } from "typeorm";

export class Table extends BasicModelEntity {
    @Column('int')
    tableNumber!: number;

    @ManyToOne('Restaurant', 'table')
    restaurant!: Restaurant;

    @OneToMany('Bill', 'table')
    bills: Bill[] | undefined;
}
import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export abstract class BasicModelEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn({ type: 'timestamp', precision: 2, default: () => 'CURRENT_TIMESTAMP(2)' })
    createdAt!: Date;

    @UpdateDateColumn({
      type: 'timestamp',
      precision: 2,
      default: () => 'CURRENT_TIMESTAMP(2)',
      onUpdate: 'CURRENT_TIMESTAMP(2)',
    })
    updatedAt!: Date;

    @DeleteDateColumn({
      type: 'timestamp',
      precision: 2,
      nullable: true,
      default: null,
      onUpdate: 'CURRENT_TIMESTAMP(2)',
    })
    deletedAt!: Date;
}
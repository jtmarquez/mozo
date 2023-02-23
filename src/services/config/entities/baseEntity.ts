import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export default class BaseModelEntity extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  declare id: string;

  @AllowNull(false)
  @CreatedAt
  @Column(DataType.DATE)
  declare createdAt: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column(DataType.DATE)
  declare updatedAt: Date;

  @AllowNull(true)
  @DeletedAt
  @Column(DataType.DATE)
  declare deletedAt: Date;
}

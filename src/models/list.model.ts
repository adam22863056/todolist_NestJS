import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  /*timestamps: true*/
})
//CreatedAt & UpdatedAt
export class TodoItem extends Model<TodoItem, TodoItem> {
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @ApiProperty({ description: 'What needs to be done?' })
  @Column({ type: DataType.TEXT })
  title: string;

  @ApiProperty()
  @Column({ type: DataType.TEXT })
  content: string;

  @ApiProperty()
  @Column
  priority: number;

  @ApiProperty()
  @AllowNull
  @Column({ type: DataType.DATE })
  start_date: Date | string;

  @ApiProperty()
  @AllowNull
  @Column({ type: DataType.DATE })
  deadline: Date | string;

  @CreatedAt
  public created_at: Date | string;

  @UpdatedAt
  public updated_at: Date | string;

  @DeletedAt
  public deleted_at: Date | string;
}

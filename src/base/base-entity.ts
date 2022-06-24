import {
  Column,
  CreateDateColumn,
  Entity,
  TableInheritance,
  UpdateDateColumn
} from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({
    type: "boolean"
  })
  isRemoved: boolean;
}

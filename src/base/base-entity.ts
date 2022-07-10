import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP'
  })
  updateAt: Date;

  @Column({ type: 'boolean' })
  isRemoved: boolean;
}

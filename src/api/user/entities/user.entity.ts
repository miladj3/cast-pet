import { Column, OneToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { BaseEntity } from '@/base/base-entity';
import { Pet } from '@/api/pets/entities/pet.entity';
import { Exclude } from 'class-transformer';

@Entity({
  name: 'user'
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  userName: string;

  @Column({ type: 'text' })
  name: string;

  @Exclude()
  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;

  @OneToMany((type) => Pet, (pet) => pet)
  pets: Pet[];
}

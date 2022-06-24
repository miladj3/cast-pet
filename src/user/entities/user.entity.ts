import { Column, ChildEntity, OneToMany, PrimaryGeneratedColumn, JoinColumn, Entity } from "typeorm";
import { Pet } from "../../pets/entities/pet.entity";
import { BaseEntity } from "../../base/base-entity";

@Entity({
  name: "user"
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  userName: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({
    type: 'text',
  })
  email: string;

  @OneToMany((type) => Pet, (pet) => pet)
  pets: Pet[];
}

import {Column, JoinColumn, ManyToOne} from "typeorm";
import {Pet} from "../../pets/entities/pet.entity";

export class Avatar {
  @Column({
    type: "text"
  })
  minio: string;

  @Column({
    type: "text"
  })
  alt: string;

  @Column({
    type: "boolean"
  })
  isActive: boolean;

  @JoinColumn({name: "petId"})
  @ManyToOne((type) => Pet, (pet) => pet.avatars, {eager: false})
  pet: Pet;
}

import { JoinColumn, ManyToOne } from "typeorm";
import { Pet } from "../../pets/entities/pet.entity";

export class PostLike {
  @JoinColumn({ name: 'petId' })
  @ManyToOne((type) => Pet, (pet) => pet.avatars, {eager: false})
  pet: Pet;
}

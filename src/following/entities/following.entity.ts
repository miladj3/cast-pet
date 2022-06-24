import {JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {Pet} from "../../pets/entities/pet.entity";

export class Following {
    @JoinColumn({name: "petId"})
    @ManyToOne((type) => Pet, (pet) => pet.following, {eager: false})
    pet: Pet;

    @OneToMany((type) => Pet, (a) => a.followers)
    followers: Pet[];
}

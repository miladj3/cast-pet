import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Pet } from '../../pets/entities/pet.entity';
import { BaseEntity } from '../../base/base-entity';

@Entity({ name: 'Following' })
export class Following extends BaseEntity {
	@JoinColumn({ name: 'petId' })
	@ManyToOne((type) => Pet, (pet) => pet.following, { eager: false })
	pet: Pet;

	@OneToMany((type) => Pet, (a) => a.followers)
	followers: Pet[];
}

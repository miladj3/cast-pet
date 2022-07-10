import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/base/base-entity';
import { Pet } from 'src/api/pets/entities/pet.entity';

@Entity({ name: 'Avatar' })
export class Avatar extends BaseEntity {
	@Column({ type: 'text' })
	minio: string;

	@Column({ type: 'text' })
	alt: string;

	@Column({ type: 'boolean' })
	isActive: boolean;

	@JoinColumn({ name: 'petId' })
	@ManyToOne((type) => Pet, (pet) => pet.avatars, { eager: false })
	pet: Pet;
}

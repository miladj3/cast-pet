import { EntitySchema } from 'typeorm';
import { Following } from '../../following/entities/following.entity';
import { Pet } from '../../pets/entities/pet.entity';

export const FollowingSchema = new EntitySchema<Following>({
	name: 'PetFollowing',
	target: Following,
	columns: {},
	relations: {
		pet: {
			type: 'many-to-one',
			target: Pet,
		},
		followers: {
			type: 'one-to-many',
			target: Pet,
		},
	},
});

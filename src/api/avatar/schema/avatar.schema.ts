import { EntitySchema } from 'typeorm';
import { Avatar } from 'src/api/avatar/entities/avatar.entity';

export const AvatarSchema = new EntitySchema<Avatar>({
	name: 'Avatar',
	target: Avatar,
	columns: {
		minio: { type: 'text' },
		alt: { type: 'text' },
		isActive: { type: 'boolean' },
	},
	relations: {
		pet: {
			type: 'many-to-one',
			target: Avatar,
		},
	},
});

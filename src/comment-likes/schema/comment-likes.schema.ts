import { EntitySchema } from 'typeorm';
import { CommentReply } from '../../comment-reply/entities/comment-reply.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { CommentLike } from '../../comment-likes/entities/comment-like.entity';
import { Pet } from '../../pets/entities/pet.entity';

export const CommentLikesSchema = new EntitySchema<CommentLike>({
	name: 'CommentReplay',
	target: CommentReply,
	columns: {},
	relations: {
		pet: {
			type: 'many-to-one',
			target: Pet,
		},
		comment: {
			type: 'many-to-one',
			target: Comment,
		},
	},
});

import { EntitySchema } from 'typeorm';
import { CommentReplyLike } from '../../comment-reply-like/entities/comment-reply-like.entity';
import { CommentReply } from '../../comment-reply/entities/comment-reply.entity';
import { Pet } from '../../pets/entities/pet.entity';

export const CommentReplayLikeSchema = new EntitySchema<CommentReplyLike>({
	name: 'CommentReplayLike',
	target: CommentReplyLike,
	columns: {},
	relations: {
		commentReplay: {
			type: 'many-to-one',
			target: CommentReply,
		},
		pet: {
			type: 'many-to-one',
			target: Pet,
		},
	},
});

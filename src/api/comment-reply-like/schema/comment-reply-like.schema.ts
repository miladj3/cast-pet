import { EntitySchema } from 'typeorm';
import { CommentReplyLike } from 'src/api/comment-reply-like/entities/comment-reply-like.entity';
import { CommentReply } from 'src/api/comment-reply/entities/comment-reply.entity';
import { Pet } from 'src/api/pets/entities/pet.entity';

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

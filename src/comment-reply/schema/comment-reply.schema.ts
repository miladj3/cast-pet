import { EntitySchema } from 'typeorm';
import { CommentReplyLike } from '../../comment-reply-like/entities/comment-reply-like.entity';
import { CommentReply } from '../../comment-reply/entities/comment-reply.entity';
import { Comment } from '../../comments/entities/comment.entity';

export const CommentReplaySchema = new EntitySchema<CommentReply>({
	name: 'CommentReplay',
	target: CommentReply,
	columns: {
		name: { type: 'text' },
	},
	relations: {
		commentReplyLike: {
			type: 'one-to-many',
			target: CommentReplyLike,
		},
		comment: {
			type: 'many-to-one',
			target: Comment,
		},
	},
});

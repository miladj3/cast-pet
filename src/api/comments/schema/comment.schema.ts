import { EntitySchema } from 'typeorm';
import { Post } from 'src/api/posts/entities/post.entity';
import { CommentLike } from 'src/api/comment-likes/entities/comment-like.entity';
import { Comment } from 'src/api/comments/entities/comment.entity';
import { CommentReply } from 'src/api/comment-reply/entities/comment-reply.entity';

export const CommentSchema = new EntitySchema<Comment>({
	name: 'Comment',
	target: Comment,
	columns: {
		name: { type: 'text' },
	},
	relations: {
		post: {
			type: 'many-to-one',
			target: Post,
		},
		replies: {
			type: 'one-to-many',
			target: CommentReply,
		},
		commentLikes: {
			type: 'one-to-many',
			target: CommentLike,
		},
	},
});

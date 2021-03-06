import { EntitySchema } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import { Post } from '../../posts/entities/post.entity';
import { CommentReply } from '../../comment-reply/entities/comment-reply.entity';
import { CommentLike } from '../../comment-likes/entities/comment-like.entity';

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

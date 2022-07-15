import { EntitySchema } from 'typeorm';
import { CommentReply } from '../../comment-reply/entities/comment-reply.entity';
import { Pet } from '../../pets/entities/pet.entity';
import { CommentReplyLike } from '../entities/comment-reply-like.entity';

export const CommentReplayLikeSchema = new EntitySchema<CommentReplyLike>({
  name: 'CommentReplayLike',
  target: CommentReplyLike,
  columns: {},
  relations: {
    commentReplay: {
      type: 'many-to-one',
      target: CommentReply
    },
    pet: {
      type: 'many-to-one',
      target: Pet
    }
  }
});

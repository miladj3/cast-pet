import { EntitySchema } from 'typeorm';
import { Avatar } from '../../avatar/entities/avatar.entity';
import { CommentLike } from '../../comment-likes/entities/comment-like.entity';
import { CommentReplyLike } from '../../comment-reply-like/entities/comment-reply-like.entity';
import { Following } from '../../following/entities/following.entity';
import { PostLike } from '../../post-likes/entities/post-like.entity';
import { User } from '../../user/entities/user.entity';
import { Pet } from '../entities/pet.entity';
import { Post } from '../../posts/entities/post.entity';

export const PetSchema = new EntitySchema<Pet>({
  name: 'Pet',
  target: Pet,
  columns: {
    name: { type: 'text' },
    pedigree: { type: 'text' },
    gender: { type: 'enum' },
    bio: { type: 'text' },
    story: { type: 'text' }
  },
  relations: {
    avatars: {
      type: 'one-to-many',
      target: Avatar
    },
    user: {
      type: 'many-to-one',
      target: User
    },
    posts: {
      type: 'one-to-many',
      target: Post
    },
    postLikes: {
      type: 'one-to-many',
      target: PostLike
    },
    commentLikes: {
      type: 'one-to-many',
      target: CommentLike
    },
    commentReplayLikes: {
      type: 'one-to-many',
      target: CommentReplyLike
    },
    following: {
      type: 'one-to-many',
      target: Following
    },
    followers: {
      type: 'many-to-one',
      target: Pet
    }
  }
});

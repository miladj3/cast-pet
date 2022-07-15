import { EntitySchema } from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';
import { Pet } from '../../pets/entities/pet.entity';
import { PostLike } from '../../post-likes/entities/post-like.entity';
import { Post } from '../entities/post.entity';

export const PostSchema = new EntitySchema<Post>({
  name: 'Post',
  target: Post,
  columns: {
    message: { type: 'text' },
  },
  relations: {
    comments: {
      type: 'one-to-many',
      target: Comment
    },
    postLikes: {
      type: 'one-to-many',
      target: PostLike
    },
    pet: {
      type: 'many-to-one',
      target: Pet
    }
  }
});

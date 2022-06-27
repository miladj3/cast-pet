import { EntitySchema } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { PostLike } from '../../post-likes/entities/post-like.entity';
import { Pet } from '../../pets/entities/pet.entity';

export const PostLikesSchema = new EntitySchema<Post>({
	name: 'Post',
	target: Post,
	columns: {
		message: { type: 'text' },
	},
	relations: {
		comments: {
			type: 'one-to-many',
			target: Comment,
		},
		postLikes: {
			type: 'one-to-many',
			target: PostLike,
		},
		pet: {
			type: 'many-to-one',
			target: Pet,
		},
	},
});

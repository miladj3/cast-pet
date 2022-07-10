import { EntitySchema } from 'typeorm';
import { Post } from 'src/api/posts/entities/post.entity';
import { Comment } from 'src/api/comments/entities/comment.entity';
import { PostLike } from 'src/api/post-likes/entities/post-like.entity';
import { Pet } from 'src/api/pets/entities/pet.entity';

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

import { EntitySchema } from 'typeorm';
import { Pet } from 'src/api/pets/entities/pet.entity';
import { Avatar } from 'src/api/avatar/entities/avatar.entity';
import { User } from 'src/api/user/entities/user.entity';
import { Post } from 'src/api/posts/entities/post.entity';
import { PostLike } from 'src/api/post-likes/entities/post-like.entity';
import { CommentLike } from 'src/api/comment-likes/entities/comment-like.entity';
import { CommentReplyLike } from 'src/api/comment-reply-like/entities/comment-reply-like.entity';
import { Following } from 'src/api/following/entities/following.entity';

export const PetSchema = new EntitySchema<Pet>({
	name: 'Pet',
	target: Pet,
	columns: {
		name: { type: 'text' },
		pedigree: { type: 'text' },
		gender: { type: 'enum' },
		bio: { type: 'text' },
		story: { type: 'text' },
	},
	relations: {
		avatars: {
			type: 'one-to-many',
			target: Avatar,
		},
		user: {
			type: 'many-to-one',
			target: User,
		},
		posts: {
			type: 'one-to-many',
			target: Post,
		},
		postLikes: {
			type: 'one-to-many',
			target: PostLike,
		},
		commentLikes: {
			type: 'one-to-many',
			target: CommentLike,
		},
		commentReplayLikes: {
			type: 'one-to-many',
			target: CommentReplyLike,
		},
		following: {
			type: 'one-to-many',
			target: Following,
		},
		followers: {
			type: 'many-to-one',
			target: Pet,
		},
	},
});

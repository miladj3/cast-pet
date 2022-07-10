import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Pet } from 'src/api/pets/entities/pet.entity';
import { Post } from 'src/api/posts/entities/post.entity';
import { BaseEntity } from 'src/base/base-entity';

@Entity({ name: 'PostLike' })
export class PostLike extends BaseEntity {
	@JoinColumn({ name: 'petId' })
	@ManyToOne((type) => Pet, (pet) => pet.posts, { eager: false })
	pet: Pet;

	@JoinColumn({ name: 'postId' })
	@ManyToOne((type) => Pet, (pet) => pet.posts, { eager: false })
	post: Post;
}

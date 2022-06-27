import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Pet } from '../../pets/entities/pet.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { BaseEntity } from '../../base/base-entity';

@Entity({ name: 'CommentLike' })
export class CommentLike extends BaseEntity {
	@JoinColumn({ name: 'petId' })
	@ManyToOne((type) => Pet, (pet) => pet.commentLikes, { eager: false })
	pet: Pet;

	@JoinColumn({ name: 'commentId' })
	@ManyToOne((type) => Comment, (a) => a.commentLikes, { eager: false })
	comment: Comment;
}

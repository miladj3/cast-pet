import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../base/base-entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Pet } from '../../pets/entities/pet.entity';

@Entity({ name: 'CommentLike' })
export class CommentLike extends BaseEntity {
  @JoinColumn({ name: 'petId' })
  @ManyToOne((type) => Pet, (pet) => pet.commentLikes, { eager: false })
  pet: Pet;

  @JoinColumn({ name: 'commentId' })
  @ManyToOne((type) => Comment, (a) => a.commentLikes, { eager: false })
  comment: Comment;
}

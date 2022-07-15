import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../base/base-entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Pet } from '../../pets/entities/pet.entity';
import { PostLike } from '../../post-likes/entities/post-like.entity';

@Entity({ name: 'Post' })
export class Post extends BaseEntity {
  @Column({ type: 'text' })
  message: string;

  @OneToMany((type) => Comment, (a) => a.post, { eager: false })
  comments: Comment;

  @OneToMany((type) => PostLike, (a) => a.post, { eager: false })
  postLikes: PostLike;

  @JoinColumn({ name: 'petId' })
  @ManyToOne((type) => Pet, (pet) => pet.posts, { eager: false })
  pet: Pet;
}

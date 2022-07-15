import { ManyToOne, JoinColumn, Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../base/base-entity';
import { Avatar } from '../../avatar/entities/avatar.entity';
import { User } from '../../user/entities/user.entity';
import { GenderEnum } from './pets.enum';
import { Post } from '../../posts/entities/post.entity';
import { PostLike } from '../../post-likes/entities/post-like.entity';
import { CommentLike } from '../../comment-likes/entities/comment-like.entity';
import { CommentReplyLike } from '../../comment-reply-like/entities/comment-reply-like.entity';
import { Following } from '../../following/entities/following.entity';

@Entity({ name: 'Pet' })
export class Pet extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  pedigree: string;

  @Column({ type: 'text' })
  gender: GenderEnum;

  @Column({ type: 'text' })
  bio: string;

  @Column({ type: 'text' })
  story: string;

  @OneToMany((type) => Avatar, (a) => a.pet)
  avatars: Avatar[];

  @JoinColumn({ name: 'userid' })
  @ManyToOne((type) => User, (a) => a.pets, { eager: false })
  user: User;

  @OneToMany((type) => Post, (a) => a.pet)
  posts: Post[];

  @OneToMany((type) => PostLike, (a) => a.pet)
  postLikes: PostLike[];

  @OneToMany((type) => CommentLike, (a) => a.pet)
  commentLikes: CommentLike[];

  @OneToMany((type) => CommentReplyLike, (a) => a.pet)
  commentReplayLikes: CommentReplyLike[];

  @OneToMany((type) => Following, (a) => a.pet)
  following: Following[];

  @JoinColumn({ name: 'petId' })
  @ManyToOne((type) => Pet, (pet) => pet.following, { eager: false })
  followers: Pet;
}

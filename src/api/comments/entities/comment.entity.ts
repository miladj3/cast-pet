import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { CommentReply } from '../../comment-reply/entities/comment-reply.entity';
import { CommentLike } from '../../comment-likes/entities/comment-like.entity';
import { BaseEntity } from '../../../base/base-entity';

@Entity({ name: 'Comment' })
export class Comment extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @JoinColumn({ name: 'postId' })
  @ManyToOne((type) => Post, (a) => a.comments, { eager: false })
  post: Post;

  @OneToMany((type) => CommentReply, (a) => a.comment, { eager: false })
  replies: CommentReply;

  @OneToMany((type) => CommentLike, (a) => a.comment, { eager: false })
  commentLikes: CommentLike;
}

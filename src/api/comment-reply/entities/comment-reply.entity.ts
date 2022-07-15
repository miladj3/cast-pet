import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../base/base-entity';
import { CommentReplyLike } from '../../comment-reply-like/entities/comment-reply-like.entity';
import { Comment } from '../../comments/entities/comment.entity';


@Entity({ name: 'CommentReply' })
export class CommentReply extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @OneToMany((type) => CommentReplyLike, (a) => a.commentReplay, { eager: false })
  commentReplyLike: CommentReplyLike;

  @JoinColumn({ name: 'commentId' })
  @ManyToOne((type) => Comment, (a) => a.commentLikes, { eager: false })
  comment: Comment;
}

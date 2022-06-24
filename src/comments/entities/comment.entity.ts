import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Post } from "../../posts/entities/post.entity";
import { CommentLike } from "../../comment-likes/entities/comment-like.entity";

export class Comment {
  @Column({
    type: "text"
  })
  name: string;

  @OneToMany((type) => CommentLike, (a) => a.post, { eager: false })
  commentLikes: CommentLike;

  @JoinColumn({ name: 'postId' })
  @ManyToOne((type) => Post, (a) => a.comments, {eager: false})
  post: Post;
}


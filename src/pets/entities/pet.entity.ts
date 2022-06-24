import {ManyToOne, JoinColumn, Entity, Column, OneToMany} from "typeorm";
import {BaseEntity} from "../../base/base-entity";
import {User} from "../../user/entities/user.entity";
import {GenderEnum} from "../pets.enum";
import {Avatar} from "../../avatar/entities/avatar.entity";
import {Post} from "../../posts/entities/post.entity";
import {PostLike} from "../../post-likes/entities/post-like.entity";
import {CommentLike} from "../../comment-likes/entities/comment-like.entity";

@Entity({
  name: "pet"
})
export class Pet extends BaseEntity {
  @Column({
    type: "text"
  })
  name: string;

  @Column({
    type: "text"
  })
  pedigree: string;

  @Column({
    type: "text"
  })
  gender: GenderEnum;

  @Column({
    type: "text"
  })
  bio: string;

  @OneToMany((type) => Avatar, (a) => a.pet)
  avatars: Avatar[];

  @JoinColumn({name: "userid"})
  @ManyToOne((type) => User, (a) => a.pets, {eager: false})
  user: User;

  @OneToMany((type) => Post, (a) => a.pet)
  posts: Post[];

  @OneToMany((type) => PostLike, (a) => a.pet)
  postLikes: PostLike[];

  @OneToMany((type) => CommentLike, (a) => a.pet)
  commentLikes: CommentLike[];
}

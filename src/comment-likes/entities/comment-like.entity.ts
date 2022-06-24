import {JoinColumn, ManyToOne} from "typeorm";
import {Pet} from "../../pets/entities/pet.entity";
import { Post } from "../../posts/entities/post.entity";

export class CommentLike {
  @JoinColumn({name: "petId"})
  @ManyToOne((type) => Pet, (pet) => pet.avatars, {eager: false})
  pet: Pet;

  @JoinColumn({ name: 'postId' })
  @ManyToOne((type) => Post, (a) => a.comments, {eager: false})
  post: Post;
}

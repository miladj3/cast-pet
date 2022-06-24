import {JoinColumn, ManyToOne} from "typeorm";
import {Pet} from "../../pets/entities/pet.entity";
import {Post} from "../../posts/entities/post.entity";

export class PostLike {
  @JoinColumn({name: "petId"})
  @ManyToOne((type) => Pet, (pet) => pet.posts, {eager: false})
  pet: Pet;

  @JoinColumn({name: "postId"})
  @ManyToOne((type) => Pet, (pet) => pet.posts, {eager: false})
  post: Post;
}

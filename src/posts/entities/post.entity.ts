import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Pet } from "../../pets/entities/pet.entity";
import { Comment } from "../../comments/entities/comment.entity";

export class Post {
  @Column({
    type: "text"
  })
  message: string;

  @OneToMany((type) => Comment, (a) => a.post, { eager: false })
  comments: Comment;
}

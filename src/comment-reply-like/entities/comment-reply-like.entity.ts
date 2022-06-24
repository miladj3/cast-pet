import {JoinColumn, ManyToOne} from "typeorm";
import {CommentReply} from "../../comment-reply/entities/comment-reply.entity";
import {Pet} from "../../pets/entities/pet.entity";

export class CommentReplyLike {
    @JoinColumn({name: 'commentReplayId'})
    @ManyToOne((type) => CommentReply, (a) => a.commentReplyLike, {eager: false})
    commentReplay: CommentReply;

    @JoinColumn({name: "petId"})
    @ManyToOne((type) => Pet, (pet) => pet.commentLikes, {eager: false})
    pet: Pet;
}

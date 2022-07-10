import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommentReply } from 'src/api/comment-reply/entities/comment-reply.entity';
import { Pet } from 'src/api/pets/entities/pet.entity';
import { BaseEntity } from 'src/base/base-entity';

@Entity({ name: 'CommentReplyLike' })
export class CommentReplyLike extends BaseEntity {
	@JoinColumn({ name: 'commentReplayId' })
	@ManyToOne((type) => CommentReply, (a) => a.commentReplyLike, { eager: false })
	commentReplay: CommentReply;

	@JoinColumn({ name: 'petId' })
	@ManyToOne((type) => Pet, (pet) => pet.commentLikes, { eager: false })
	pet: Pet;
}
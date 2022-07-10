import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentReplyLikeDto } from 'src/api/comment-reply-like/dto/create-comment-reply-like.dto';

export class UpdateCommentReplyLikeDto extends PartialType(CreateCommentReplyLikeDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentReplyLikeDto } from './create-comment-reply-like.dto';

export class UpdateCommentReplyLikeDto extends PartialType(CreateCommentReplyLikeDto) {}

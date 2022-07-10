import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentReplyDto } from 'src/api/comment-reply/dto/create-comment-reply.dto';

export class UpdateCommentReplyDto extends PartialType(CreateCommentReplyDto) {}

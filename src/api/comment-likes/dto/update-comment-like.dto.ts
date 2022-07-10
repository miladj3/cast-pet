import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentLikeDto } from 'src/api/comment-likes/dto/create-comment-like.dto';

export class UpdateCommentLikeDto extends PartialType(CreateCommentLikeDto) {}

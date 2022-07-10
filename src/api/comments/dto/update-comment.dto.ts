import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from 'src/api/comments/dto/create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}

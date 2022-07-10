import { PartialType } from '@nestjs/mapped-types';
import { CreatePostLikeDto } from 'src/api/post-likes/dto/create-post-like.dto';

export class UpdatePostLikeDto extends PartialType(CreatePostLikeDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowingDto } from 'src/api/following/dto/create-following.dto';

export class UpdateFollowingDto extends PartialType(CreateFollowingDto) {}

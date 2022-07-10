import { PartialType } from '@nestjs/mapped-types';
import { CreateAvatarDto } from 'src/api/avatar/dto/create-avatar.dto';

export class UpdateAvatarDto extends PartialType(CreateAvatarDto) {}

import { Injectable } from '@nestjs/common';
import { CreateAvatarDto } from 'src/api/avatar/dto/create-avatar.dto';
import { UpdateAvatarDto } from 'src/api/avatar/dto/update-avatar.dto';

@Injectable()
export class AvatarService {
  create(createAvatarDto: CreateAvatarDto) {
    return 'This action adds a new avatar';
  }

  findAll() {
    return `This action returns all avatar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avatar`;
  }

  update(id: number, updateAvatarDto: UpdateAvatarDto) {
    return `This action updates a #${id} avatar`;
  }

  remove(id: number) {
    return `This action removes a #${id} avatar`;
  }
}

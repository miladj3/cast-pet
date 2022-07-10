import { Injectable } from '@nestjs/common';
import { CreateFollowingDto } from 'src/api/following/dto/create-following.dto';
import { UpdateFollowingDto } from 'src/api/following/dto/update-following.dto';

@Injectable()
export class FollowingService {
  create(createFollowingDto: CreateFollowingDto) {
    return 'This action adds a new following';
  }

  findAll() {
    return `This action returns all following`;
  }

  findOne(id: number) {
    return `This action returns a #${id} following`;
  }

  update(id: number, updateFollowingDto: UpdateFollowingDto) {
    return `This action updates a #${id} following`;
  }

  remove(id: number) {
    return `This action removes a #${id} following`;
  }
}

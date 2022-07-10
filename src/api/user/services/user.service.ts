import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/api/user/entities/user.entity';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/api/user/dto/update-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}


  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const item = await this.userRepository.findOne({
      where: {
        id: id
      }
    });
    if (!item) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return item;
  }

  async create(data: CreateUserDto): Promise<User> {
    const item = this.userRepository.create({
      id: uuid(),
      userName: data.name
    });

    return await this.userRepository.save(item);
  }

  async update(id: number, changes: UpdateUserDto) {
    const item = await this.findOne(id);
    // this.userRepository.merge(item, changes);

    return await this.userRepository.save(item);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}

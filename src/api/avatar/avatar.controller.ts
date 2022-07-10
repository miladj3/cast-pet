import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvatarService } from 'src/api/avatar/avatar.service';
import { CreateAvatarDto } from 'src/api/avatar/dto/create-avatar.dto';
import { UpdateAvatarDto } from 'src/api/avatar/dto/update-avatar.dto';

@Controller('avatar')
export class AvatarController {
  constructor(private readonly avatarService: AvatarService) {}

  @Post()
  create(@Body() createAvatarDto: CreateAvatarDto) {
    return this.avatarService.create(createAvatarDto);
  }

  @Get()
  findAll() {
    return this.avatarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avatarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvatarDto: UpdateAvatarDto) {
    return this.avatarService.update(+id, updateAvatarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avatarService.remove(+id);
  }
}

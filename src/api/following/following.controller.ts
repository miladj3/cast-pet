import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowingService } from 'src/api/following/following.service';
import { CreateFollowingDto } from 'src/api/following/dto/create-following.dto';
import { UpdateFollowingDto } from 'src/api/following/dto/update-following.dto';

@Controller('following')
export class FollowingController {
  constructor(private readonly followingService: FollowingService) {}

  @Post()
  create(@Body() createFollowingDto: CreateFollowingDto) {
    return this.followingService.create(createFollowingDto);
  }

  @Get()
  findAll() {
    return this.followingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFollowingDto: UpdateFollowingDto) {
    return this.followingService.update(+id, updateFollowingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followingService.remove(+id);
  }
}

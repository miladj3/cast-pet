import { Module } from '@nestjs/common';
import { PostLikesService } from 'src/api/post-likes/post-likes.service';
import { PostLikesController } from 'src/api/post-likes/post-likes.controller';

@Module({
  controllers: [PostLikesController],
  providers: [PostLikesService]
})
export class PostLikesModule {}

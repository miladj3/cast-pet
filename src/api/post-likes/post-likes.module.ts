import { Module } from '@nestjs/common';
import { PostLikesController } from './controllers/post-likes.controller';
import { PostLikesService } from './services/post-likes.service';

@Module({
  controllers: [PostLikesController],
  providers: [PostLikesService]
})
export class PostLikesModule {}

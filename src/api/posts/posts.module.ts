import { Module } from '@nestjs/common';
import { PostsService } from 'src/api/posts/posts.service';
import { PostsController } from 'src/api/posts/posts.controller';

@Module({
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}

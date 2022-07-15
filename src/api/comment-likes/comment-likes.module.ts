import { Module } from '@nestjs/common';
import { CommentLikesController } from './controllers/comment-likes.controller';
import { CommentLikesService } from './services/comment-likes.service';

@Module({
  controllers: [CommentLikesController],
  providers: [CommentLikesService]
})
export class CommentLikesModule {}

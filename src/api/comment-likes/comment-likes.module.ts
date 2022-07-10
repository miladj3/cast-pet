import { Module } from '@nestjs/common';
import { CommentLikesService } from 'src/api/comment-likes/comment-likes.service';
import { CommentLikesController } from 'src/api/comment-likes/comment-likes.controller';

@Module({
  controllers: [CommentLikesController],
  providers: [CommentLikesService]
})
export class CommentLikesModule {}

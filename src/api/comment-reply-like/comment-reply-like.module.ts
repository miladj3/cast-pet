import { Module } from '@nestjs/common';
import { CommentReplyLikeController } from './controllers/comment-reply-like.controller';
import { CommentReplyLikeService } from './services/comment-reply-like.service';

@Module({
  controllers: [CommentReplyLikeController],
  providers: [CommentReplyLikeService]
})
export class CommentReplyLikeModule {}

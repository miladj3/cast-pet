import { Module } from '@nestjs/common';
import { CommentReplyLikeService } from './comment-reply-like.service';
import { CommentReplyLikeController } from './comment-reply-like.controller';

@Module({
  controllers: [CommentReplyLikeController],
  providers: [CommentReplyLikeService]
})
export class CommentReplyLikeModule {}

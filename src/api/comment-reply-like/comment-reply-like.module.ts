import { Module } from '@nestjs/common';
import { CommentReplyLikeService } from 'src/api/comment-reply-like/comment-reply-like.service';
import { CommentReplyLikeController } from 'src/api/comment-reply-like/comment-reply-like.controller';

@Module({
  controllers: [CommentReplyLikeController],
  providers: [CommentReplyLikeService]
})
export class CommentReplyLikeModule {}

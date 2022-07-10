import { Module } from '@nestjs/common';
import { CommentReplyService } from 'src/api/comment-reply/comment-reply.service';
import { CommentReplyController } from 'src/api/comment-reply/comment-reply.controller';

@Module({
  controllers: [CommentReplyController],
  providers: [CommentReplyService]
})
export class CommentReplyModule {}

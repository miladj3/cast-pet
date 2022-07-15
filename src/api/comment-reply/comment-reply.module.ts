import { Module } from '@nestjs/common';
import { CommentReplyController } from './controllers/comment-reply.controller';
import { CommentReplyService } from './services/comment-reply.service';

@Module({
  controllers: [CommentReplyController],
  providers: [CommentReplyService]
})
export class CommentReplyModule {}

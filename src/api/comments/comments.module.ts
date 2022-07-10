import { Module } from '@nestjs/common';
import { CommentsService } from 'src/api/comments/comments.service';
import { CommentsController } from 'src/api/comments/comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}

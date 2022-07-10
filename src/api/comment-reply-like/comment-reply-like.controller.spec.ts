import { Test, TestingModule } from '@nestjs/testing';
import { CommentReplyLikeController } from 'src/api/comment-reply-like/comment-reply-like.controller';
import { CommentReplyLikeService } from 'src/api/comment-reply-like/comment-reply-like.service';

describe('CommentReplyLikeController', () => {
  let controller: CommentReplyLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentReplyLikeController],
      providers: [CommentReplyLikeService],
    }).compile();

    controller = module.get<CommentReplyLikeController>(CommentReplyLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

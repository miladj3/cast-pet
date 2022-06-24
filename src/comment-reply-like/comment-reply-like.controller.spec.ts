import { Test, TestingModule } from '@nestjs/testing';
import { CommentReplyLikeController } from './comment-reply-like.controller';
import { CommentReplyLikeService } from './comment-reply-like.service';

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

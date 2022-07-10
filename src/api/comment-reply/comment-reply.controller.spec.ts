import { Test, TestingModule } from '@nestjs/testing';
import { CommentReplyController } from 'src/api/comment-reply/comment-reply.controller';
import { CommentReplyService } from 'src/api/comment-reply/comment-reply.service';

describe('CommentReplyController', () => {
  let controller: CommentReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentReplyController],
      providers: [CommentReplyService],
    }).compile();

    controller = module.get<CommentReplyController>(CommentReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

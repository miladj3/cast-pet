import { Test, TestingModule } from '@nestjs/testing';
import { CommentReplyLikeService } from './comment-reply-like.service';

describe('CommentReplyLikeService', () => {
  let service: CommentReplyLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentReplyLikeService],
    }).compile();

    service = module.get<CommentReplyLikeService>(CommentReplyLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

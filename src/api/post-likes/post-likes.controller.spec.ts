import { Test, TestingModule } from '@nestjs/testing';
import { PostLikesController } from 'src/api/post-likes/post-likes.controller';
import { PostLikesService } from 'src/api/post-likes/post-likes.service';

describe('PostLikesController', () => {
  let controller: PostLikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostLikesController],
      providers: [PostLikesService],
    }).compile();

    controller = module.get<PostLikesController>(PostLikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
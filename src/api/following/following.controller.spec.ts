import { Test, TestingModule } from '@nestjs/testing';
import { FollowingController } from 'src/api/following/following.controller';
import { FollowingService } from 'src/api/following/following.service';

describe('FollowingController', () => {
  let controller: FollowingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowingController],
      providers: [FollowingService],
    }).compile();

    controller = module.get<FollowingController>(FollowingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

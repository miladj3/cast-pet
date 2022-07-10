import { Test, TestingModule } from '@nestjs/testing';
import { AvatarController } from 'src/api/avatar/avatar.controller';
import { AvatarService } from 'src/api/avatar/avatar.service';

describe('AvatarController', () => {
  let controller: AvatarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvatarController],
      providers: [AvatarService],
    }).compile();

    controller = module.get<AvatarController>(AvatarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

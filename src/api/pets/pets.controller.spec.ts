import { Test, TestingModule } from '@nestjs/testing';
import { PetsController } from 'src/api/pets/pets.controller';
import { PetsService } from 'src/api/pets/pets.service';

describe('PetsController', () => {
  let controller: PetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [PetsService],
    }).compile();

    controller = module.get<PetsController>(PetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { PetsService } from 'src/api/pets/pets.service';
import { PetsController } from 'src/api/pets/pets.controller';

@Module({
  controllers: [PetsController],
  providers: [PetsService]
})
export class PetsModule {}

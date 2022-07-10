import { PartialType } from '@nestjs/mapped-types';
import { CreatePetDto } from 'src/api/pets/dto/create-pet.dto';

export class UpdatePetDto extends PartialType(CreatePetDto) {}

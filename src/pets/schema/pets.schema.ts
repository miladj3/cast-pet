import { EntitySchema } from 'typeorm';
import { Pet } from "../entities/pet.entity";

export const UserSchema = new EntitySchema<Pet>({
  name: 'Pet',
  target: Pet,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User', // the name of the UserSchema
    },
  },
});

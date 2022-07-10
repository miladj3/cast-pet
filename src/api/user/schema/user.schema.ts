import { EntitySchema } from 'typeorm';
import { Pet } from '@/api/pets/entities/pet.entity';
import { User } from '@/api/user/entities/user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    userName: {
      type: String
    },
    email: {
      type: String
    }
  },
  relations: {
    pets: {
      type: 'one-to-many',
      target: Pet
    }
  }
});

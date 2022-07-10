import { EntitySchema } from 'typeorm';
import { BaseEntity } from 'src/base/base-entity';

export const BaseEntitySchema = new EntitySchema<BaseEntity>({
  name: 'BaseEntity',
  target: BaseEntity,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    isRemoved: { type: 'boolean' },
    updateAt: { type: Date }
  }
});

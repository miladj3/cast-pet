import { User } from "./user/entities/user.entity";

export const config = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "milad",
  database: "castpet-dev",
  autoLoadEntities: true,
  synchronize: true,
  logging: true
}

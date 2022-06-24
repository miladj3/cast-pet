import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from "./config";
import { DataSource, DataSourceOptions } from "typeorm";

const dbConfig = config.config;
// const dbConfig = config.get("db");

const typeOrmConfig = {
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: dbConfig.synchronize,
  migrations: ["src/base/migrations/*.ts"],
  migrationsTableName: "migrations_history",
  migrationsRun: true,
  schema: "public",
  entities: ["src/**/*.entity.ts"],
  logging: dbConfig.logging,
  cli: {
    "migrationsDir": "src/migrations"
  }
};
const dataSource = new DataSource(typeOrmConfig as DataSourceOptions);
const ormConfig: TypeOrmModuleOptions = typeOrmConfig as TypeOrmModuleOptions;
export  { dataSource, ormConfig };

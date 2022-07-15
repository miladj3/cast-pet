import { Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DatabaseConfiguration } from './config/database-configuration';
import { ConfigService } from '@nestjs/config';

export class GetDataSourceConfiguration {
  @Inject(DatabaseConfiguration)
  private readonly database: DatabaseConfiguration;

  @Inject(ConfigService)
  private readonly config: ConfigService;

  public getDatasource() {
    console.log(this)
    //const item = this.database.createTypeOrmOptions();
    return new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'milad',
      database: 'castpet-dev',
      entities: ['./src/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: false,
      migrations: ['./src/database/migrations/*.ts'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
      schema: 'public'
    });
  }
}

export default new GetDataSourceConfiguration().getDatasource();

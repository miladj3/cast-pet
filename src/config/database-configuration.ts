import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfiguration implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: this.config.get<string>('POSTGRES_HOST'),
      port: this.config.get<number>('POSTGRES_PORT'),
      username: this.config.get<string>('POSTGRES_USERNAME'),
      password: this.config.get<string>('POSTGRES_PASSWORD'),
      database: this.config.get<string>('POSTGRES_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: false,
      migrations: ['src/database/migrations/*.ts'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
      schema: 'public',
      namingStrategy: new SnakeNamingStrategy()
    };
  }
}

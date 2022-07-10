import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from '@/config/database-configuration';
import { ConfigModule } from '@nestjs/config';
import config from '@/config/config';
import { getEnvPath } from '@/common/helper/env.helper';
import { ApiModule } from '@/api/api.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfiguration }),
    ConfigModule.forRoot({
      envFilePath,
      load: [config],
      isGlobal: true
    }),
    ApiModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

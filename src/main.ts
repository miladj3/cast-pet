import { NestFactory, Reflector } from '@nestjs/core';
import {
  Logger,
  ValidationPipe,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const configSwagger = new DocumentBuilder().setTitle('API').setDescription('PLATZI STORE').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
  });

  logger.log(`Server is runnig at ${await app.getUrl()}`);
}

bootstrap().then();

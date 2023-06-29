import {
  ClassSerializerInterceptor,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { InternalExceptionFilter } from './common/filters/internal.exception.filter';
import { AppConfig } from './config/app.config';
import { ModuleAModule } from './module-a.module';

async function bootstrap() {
  const app = await NestFactory.create(ModuleAModule);
  const appConfig = app.get(ConfigService).getOrThrow<AppConfig>('app');

  const config = new DocumentBuilder()
    .setTitle('Module A')
    .setDescription('The module A API description')
    .setVersion(appConfig.APP_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );
  app.useGlobalFilters(new InternalExceptionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: appConfig.PORT_MICROSERVICE,
    },
  });

  await app.startAllMicroservices();
  await app.listen(appConfig.PORT);
}
bootstrap();

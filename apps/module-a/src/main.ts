import { NestFactory } from '@nestjs/core';
import { ModuleAModule } from './module-a.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ModuleAModule);
  const config = new DocumentBuilder()
    .setTitle('Module A')
    .setDescription('The module A API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3002,
    },
  });
  app.setGlobalPrefix('api');
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();

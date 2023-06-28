import { NestFactory } from '@nestjs/core';
import { ModuleBModule } from './module-b.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ModuleBModule);
  const config = new DocumentBuilder()
    .setTitle('Module B')
    .setDescription('The module B API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3003);
}
bootstrap();

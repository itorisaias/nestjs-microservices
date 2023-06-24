import { NestFactory } from '@nestjs/core';
import { ModuleBModule } from './module-b.module';

async function bootstrap() {
  const app = await NestFactory.create(ModuleBModule);
  await app.listen(3000);
}
bootstrap();

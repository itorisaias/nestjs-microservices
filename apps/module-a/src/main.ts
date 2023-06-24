import { NestFactory } from '@nestjs/core';
import { ModuleAModule } from './module-a.module';

async function bootstrap() {
  const app = await NestFactory.create(ModuleAModule);
  await app.listen(3000);
}
bootstrap();

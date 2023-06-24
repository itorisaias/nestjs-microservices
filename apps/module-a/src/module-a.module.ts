import { Module } from '@nestjs/common';
import { ModuleAController } from './module-a.controller';
import { ModuleAService } from './module-a.service';

@Module({
  imports: [],
  controllers: [ModuleAController],
  providers: [ModuleAService],
})
export class ModuleAModule {}

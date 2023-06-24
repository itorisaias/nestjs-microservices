import { Module } from '@nestjs/common';
import { ModuleBController } from './module-b.controller';
import { ModuleBService } from './module-b.service';

@Module({
  imports: [],
  controllers: [ModuleBController],
  providers: [ModuleBService],
})
export class ModuleBModule {}

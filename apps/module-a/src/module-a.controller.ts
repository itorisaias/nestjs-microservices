import { Controller, Get } from '@nestjs/common';
import { ModuleAService } from './module-a.service';

@Controller()
export class ModuleAController {
  constructor(private readonly moduleAService: ModuleAService) {}

  @Get()
  getHello(): string {
    return this.moduleAService.getHello();
  }
}

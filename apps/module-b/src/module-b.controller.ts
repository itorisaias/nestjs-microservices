import { Controller, Get } from '@nestjs/common';
import { ModuleBService } from './module-b.service';

@Controller()
export class ModuleBController {
  constructor(private readonly moduleBService: ModuleBService) {}

  @Get()
  getHello(): string {
    return this.moduleBService.getHello();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleAService {
  getHello(): string {
    return 'Hello World!';
  }
}

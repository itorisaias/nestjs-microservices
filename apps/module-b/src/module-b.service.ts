import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleBService {
  getHello(): string {
    return 'Hello World!';
  }
}

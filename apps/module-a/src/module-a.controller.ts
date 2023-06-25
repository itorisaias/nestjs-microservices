import { CommandPattern, Commands } from '@app/commands';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Controller()
export class ModuleAController {
  @MessagePattern<CommandPattern>({ cmd: Commands.HELLO })
  async hello(name: string) {
    console.log('call command hello');

    await delay(5000);

    return `Hello ${name}`;
  }
}

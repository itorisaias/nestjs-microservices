import { Commands } from '@app/commands';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

type SendResult = string;
type SendInput = string;

@Controller()
export class ModuleBController {
  constructor(
    @Inject('MODULE_A')
    private tcpClient: ClientProxy,
  ) {}

  @Get()
  async getHello(@Query('name') name = 'anonymous') {
    try {
      console.log('trigger B');
      const result = await firstValueFrom(
        this.tcpClient.send<SendResult, SendInput>(
          { cmd: Commands.HELLO },
          name,
        ),
      );
      console.log('wait  result');

      return result;
    } catch (error) {
      return 'deu merda';
    }
  }
}

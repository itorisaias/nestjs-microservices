import { Commands } from '@app/commands';
import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { firstValueFrom } from 'rxjs';

type SendInput = {
  email: string;
  password: string;
};
type SendResult = SendInput & {
  id: string;
};

@Controller()
export class ModuleBController {
  private readonly logger = new Logger(ModuleBController.name);

  constructor(
    @Inject('CUSTOMER_SERVICE')
    private customerService: ClientProxy,
  ) {}

  @Get()
  async signInCustomer() {
    const request = this.customerService.send<SendResult, SendInput>(
      { cmd: Commands.CUSTOMER_SIGN_IN },
      { email: 'itor1.isaias@gmail.com', password: randomUUID() },
    );

    const response = await firstValueFrom(request);

    return response;
  }
}

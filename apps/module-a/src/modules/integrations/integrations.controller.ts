import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { firstValueFrom } from 'rxjs';

@Controller('integrations')
export class IntegrationsController {
  constructor(
    @Inject('CUSTOMER_SERVICE')
    private tcpClient: ClientProxy,
  ) {}

  @Get('generate-sign-in-test')
  async generateSignInTest() {
    const request = this.tcpClient.send(
      { cmd: 'sign-in' },
      {
        email: randomUUID().concat('@gmail.com'),
        password: randomUUID(),
        name: randomUUID(),
      },
    );

    const response = await firstValueFrom(request);

    return response;
  }
}

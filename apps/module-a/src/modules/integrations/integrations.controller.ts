import { Commands } from '@app/commands';
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { firstValueFrom } from 'rxjs';

@ApiTags('integrations')
@Controller('integrations')
export class IntegrationsController {
  constructor(
    @Inject('CUSTOMER_SERVICE')
    private readonly customerService: ClientProxy,
  ) {}

  @Get('generate-sign-in-test')
  async generateSignInTest() {
    const request = this.customerService.send(
      { cmd: Commands.CUSTOMER_SIGN_IN },
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

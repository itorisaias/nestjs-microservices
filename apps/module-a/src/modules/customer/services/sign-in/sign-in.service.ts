import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { PrismaService } from 'apps/module-a/src/prisma/prisma.service';
import { Counter } from 'prom-client';

@Injectable()
export class SignInService {
  constructor(
    @InjectMetric('users_sign_in')
    private readonly usersSignInCounter: Counter<string>,
    private readonly prismaService: PrismaService,
  ) {}

  async execute(payload: any) {
    const customer = await this.prismaService.customer.findFirstOrThrow({
      where: { email: payload.email },
    });

    if (customer.password !== payload.password)
      throw new Error('Senha invalida');

    this.usersSignInCounter.inc();

    return customer;
  }
}

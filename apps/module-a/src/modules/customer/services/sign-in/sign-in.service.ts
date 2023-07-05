import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { InternalException } from 'apps/module-a/src/common/exceptions/internal.exception';
import { PrismaService } from 'apps/module-a/src/infra/prisma/prisma.service';
import { Counter } from 'prom-client';

@Injectable()
export class SignInService {
  constructor(
    @InjectMetric('users_sign_in')
    private readonly usersSignInCounter: Counter<string>,
    private readonly prismaService: PrismaService,
  ) {}

  async execute(payload: any) {
    const customer = await this.prismaService.customer.findFirst({
      where: { email: payload.email },
    });

    if (!customer) {
      throw new InternalException('email or password invalid', 400);
    }

    if (customer.password !== payload.password) {
      throw new InternalException('email or password invalid', 400);
    }

    this.usersSignInCounter.inc();

    return customer;
  }
}

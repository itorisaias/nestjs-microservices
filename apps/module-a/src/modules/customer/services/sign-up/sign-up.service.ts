import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { PrismaService } from 'apps/module-a/src/prisma/prisma.service';
import { Counter } from 'prom-client';

@Injectable()
export class SignUpService {
  constructor(
    @InjectMetric('users_sign_up')
    private readonly usersSignUpCounter: Counter<string>,
    private readonly prismaService: PrismaService,
  ) {}

  async execute(payload: any) {
    const existEmail = await this.prismaService.customer.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (existEmail) throw new Error('E-mail em uso');

    const newUser = await this.prismaService.customer.create({
      data: {
        email: payload.email,
        name: payload.name,
        password: payload.password,
      },
    });

    this.usersSignUpCounter.inc();

    return newUser;
  }
}

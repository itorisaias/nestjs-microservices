import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { PrismaService } from 'apps/module-a/src/infra/prisma/prisma.service';
import { Queue } from 'bull';
import { Counter } from 'prom-client';

@Injectable()
export class SignUpService {
  private logger = new Logger(SignUpService.name);

  constructor(
    private readonly prismaService: PrismaService,
    @InjectMetric('users_sign_up')
    private readonly usersSignUpCounter: Counter<string>,
    @InjectQueue('customer')
    private readonly customerCreatedQueue: Queue,
  ) {}

  async execute(payload: any) {
    const existEmail = await this.prismaService.customer.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (existEmail) throw new Error('E-mail em uso');

    const user = await this.prismaService.$transaction(async (trx) => {
      const newUser = await trx.customer.create({
        data: {
          email: payload.email,
          name: payload.name,
          password: payload.password,
        },
      });

      await this.customerCreatedQueue.add('created', {
        email: newUser.email,
        customer_id: newUser.id,
      });

      this.logger.debug(newUser);

      return newUser;
    });

    this.usersSignUpCounter.inc();

    return user;
  }
}

import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { PaymentModule } from './modules/payment/payment.module';
import { RaffleModule } from './modules/raffle/raffle.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CustomerModule, PaymentModule, RaffleModule, IntegrationsModule, PrismaModule],
})
export class ModuleAModule {}

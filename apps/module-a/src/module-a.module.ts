import { Module } from '@nestjs/common';
import { ModuleAController } from './module-a.controller';
import { CustomerModule } from './modules/customer/customer.module';
import { PaymentModule } from './modules/payment/payment.module';
import { RaffleModule } from './modules/raffle/raffle.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';

@Module({
  imports: [CustomerModule, PaymentModule, RaffleModule, IntegrationsModule],
  controllers: [ModuleAController],
})
export class ModuleAModule {}

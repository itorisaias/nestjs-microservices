import { Module } from '@nestjs/common';
import { ModuleAController } from './module-a.controller';
import { CustomerModule } from './modules/customer/customer.module';
import { PaymentModule } from './modules/payment/payment.module';
import { RaffleModule } from './modules/raffle/raffle.module';

@Module({
  imports: [CustomerModule, PaymentModule, RaffleModule],
  controllers: [ModuleAController],
})
export class ModuleAModule {}

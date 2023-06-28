import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { PaymentModule } from './modules/payment/payment.module';
import { RaffleModule } from './modules/raffle/raffle.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { PrometheusController } from './prometheus/prometheus.controller';

@Module({
  imports: [
    PrometheusModule.register({
      defaultLabels: {
        app: 'module-a',
      },
      controller: PrometheusController,
    }),
    CustomerModule,
    PaymentModule,
    RaffleModule,
    IntegrationsModule,
    PrismaModule,
  ],
  controllers: [PrometheusController],
})
export class ModuleAModule {}

import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

import appConfig from './config/app.config';
import redisConfig from './config/redis.config';
import { HealthModule } from './infra/health/health.module';
import { PrismaModule } from './infra/prisma/prisma.module';
import { PrometheusController } from './infra/prometheus/prometheus.controller';
import { CustomerModule } from './modules/customer/customer.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { PaymentModule } from './modules/payment/payment.module';
import { RaffleModule } from './modules/raffle/raffle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    ScheduleModule.forRoot(),
    BullModule.forRootAsync({
      imports: [ConfigModule.forRoot({ load: [redisConfig] })],
      useFactory: (config: ConfigType<typeof redisConfig>) => {
        let tls = {};

        if (config.REDIS_ENABLE_TLS) {
          tls = {
            host: config.REDIS_HOST,
          };
        }

        return {
          defaultJobOptions: {
            removeOnComplete: false,
          },
          redis: {
            host: config.REDIS_HOST,
            port: config.REDIS_PORT,
            password: config.REDIS_PASSWORD,
            tls,
          },
        };
      },
      inject: [redisConfig.KEY],
    }),
    PrometheusModule.register({
      defaultLabels: {
        app: 'module-a',
      },
      controller: PrometheusController,
    }),
    PrismaModule,
    CustomerModule,
    PaymentModule,
    RaffleModule,
    IntegrationsModule,
    HealthModule,
    NotificationsModule,
  ],
  controllers: [PrometheusController],
})
export class ModuleAModule {}

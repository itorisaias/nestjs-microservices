import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import appConfig from './config/app.config';
import { ModuleBController } from './module-b.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ClientsModule.registerAsync({
      clients: [
        {
          name: 'CUSTOMER_SERVICE',
          imports: [ConfigModule.forRoot({ load: [appConfig] })],
          inject: [appConfig.KEY],
          useFactory: (config: ConfigType<typeof appConfig>) => ({
            transport: Transport.TCP,
            options: {
              host: config.CUSTOMER_SERVICE_HOST,
              port: config.CUSTOMER_SERVICE_PORT,
            },
          }),
        },
      ],
    }),
    PrismaModule,
  ],
  controllers: [ModuleBController],
})
export class ModuleBModule {}

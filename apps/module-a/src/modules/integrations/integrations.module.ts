import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import appConfig from '../../config/app.config';
import { IntegrationsController } from './integrations.controller';

@Module({
  imports: [
    ClientsModule.registerAsync({
      clients: [
        {
          imports: [ConfigModule.forRoot({ load: [appConfig] })],
          inject: [appConfig.KEY],
          name: 'CUSTOMER_SERVICE',
          useFactory: (config: ConfigType<typeof appConfig>) => ({
            transport: Transport.TCP,
            options: {
              port: config.PORT_MICROSERVICE,
            },
          }),
        },
      ],
    }),
  ],
  controllers: [IntegrationsController],
})
export class IntegrationsModule {}

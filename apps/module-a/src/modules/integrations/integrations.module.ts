import { Module } from '@nestjs/common';
import { IntegrationsController } from './integrations.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [IntegrationsController],
})
export class IntegrationsModule {}

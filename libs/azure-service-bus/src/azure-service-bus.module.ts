import { Module } from '@nestjs/common';
import { AzureServiceBusService } from './azure-service-bus.service';

@Module({
  providers: [AzureServiceBusService],
  exports: [AzureServiceBusService],
})
export class AzureServiceBusModule {}

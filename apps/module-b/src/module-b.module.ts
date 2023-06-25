import { Module } from '@nestjs/common';
import { ModuleBController } from './module-b.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MODULE_A',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [ModuleBController],
})
export class ModuleBModule {}

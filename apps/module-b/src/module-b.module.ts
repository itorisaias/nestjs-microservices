import { Module } from '@nestjs/common';
import { ModuleBController } from './module-b.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaModule } from './prisma/prisma.module';

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
    PrismaModule,
  ],
  controllers: [ModuleBController],
})
export class ModuleBModule {}

import { Module } from '@nestjs/common';
import { RaffleController } from './raffle.controller';

@Module({
  controllers: [RaffleController]
})
export class RaffleModule {}

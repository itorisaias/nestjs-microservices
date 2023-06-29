import { Module } from '@nestjs/common';

import { CustomerConsumer } from './consumers/customer.consumer';
import { NotificationsService } from './notifications.service';

@Module({
  providers: [NotificationsService, CustomerConsumer],
})
export class NotificationsModule {}

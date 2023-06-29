import { Controller, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('payment')
export class PaymentController {
  private logger = new Logger(PaymentController.name);

  @Cron(CronExpression.EVERY_MINUTE)
  checkPaymentsNotProcessed() {
    this.logger.debug('check payment not processed every minute!');
  }
}

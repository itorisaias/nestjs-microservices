import { OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('customer')
export class CustomerConsumer {
  private logger = new Logger(CustomerConsumer.name);

  @Process('created')
  customerCreated(user) {
    this.logger.debug('new customer created - notify by e-mail', { user });
  }

  @OnQueueFailed()
  onFailed(job: Job, error: Error) {
    this.logger.error(`falied on process ${job.id}`, error);
  }
}

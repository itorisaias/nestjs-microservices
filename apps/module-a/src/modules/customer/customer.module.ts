import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignInService } from './services/sign-in/sign-in.service';
import { ConfirmEmailService } from './services/confirm-email/confirm-email.service';
import { ResetPasswordService } from './services/reset-password/reset-password.service';

@Module({
  controllers: [CustomerController],
  providers: [
    SignUpService,
    SignInService,
    ConfirmEmailService,
    ResetPasswordService,
  ],
})
export class CustomerModule {}

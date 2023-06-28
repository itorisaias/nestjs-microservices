import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignInService } from './services/sign-in/sign-in.service';
import { ConfirmEmailService } from './services/confirm-email/confirm-email.service';
import { ResetPasswordService } from './services/reset-password/reset-password.service';
import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

@Module({
  controllers: [CustomerController],
  providers: [
    SignUpService,
    SignInService,
    ConfirmEmailService,
    ResetPasswordService,
    makeCounterProvider({
      name: 'users_sign_in',
      help: 'users_sign_in',
    }),
    makeCounterProvider({
      name: 'users_sign_up',
      help: 'users_sign_up',
    }),
  ],
})
export class CustomerModule {}

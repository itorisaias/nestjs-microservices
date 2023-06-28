import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ConfirmEmailDto, ResetPasswordDto, SignInDto, SignUpDto } from './dto';
import { MessagePattern } from '@nestjs/microservices';
import {
  ConfirmEmailService,
  ResetPasswordService,
  SignInService,
  SignUpService,
} from './services';
import { randomUUID } from 'crypto';
import { CommandPattern, Commands } from '@app/commands';

@Controller('customer')
export class CustomerController {
  private logger = new Logger(CustomerController.name);

  constructor(
    private readonly signInService: SignInService,
    private readonly signUpService: SignUpService,
    private readonly resetPasswordService: ResetPasswordService,
    private readonly confirmEmailService: ConfirmEmailService,
  ) {}

  @Post('sign-in')
  @MessagePattern<CommandPattern>({ cmd: Commands.CUSTOMER_SIGN_IN })
  signIn(@Body() payload: SignInDto) {
    this.logger.debug(payload);

    return {
      id: randomUUID(),
      ...payload,
    };
  }

  @Post('sign-up')
  signUp(@Body() payload: SignUpDto) {
    this.logger.debug(payload);

    return 'sign-up';
  }

  @Post('confirm-email')
  @MessagePattern({ cmd: 'confirm-email' })
  confirmEmail(@Body() payload: ConfirmEmailDto) {
    this.logger.debug(payload);

    return 'confirm-email';
  }

  @Post('reset-password')
  resetPassword(@Body() payload: ResetPasswordDto) {
    this.logger.debug(payload);

    return 'reset-password';
  }
}

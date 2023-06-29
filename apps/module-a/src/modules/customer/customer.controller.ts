import { CommandPattern, Commands } from '@app/commands';
import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

import { ConfirmEmailDto, ResetPasswordDto, SignInDto, SignUpDto } from './dto';
import {
  ConfirmEmailService,
  ResetPasswordService,
  SignInService,
  SignUpService,
} from './services';

@ApiTags('customer')
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
    return this.signInService.execute(payload);
  }

  @Post('sign-up')
  signUp(@Body() payload: SignUpDto) {
    return this.signUpService.execute(payload);
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

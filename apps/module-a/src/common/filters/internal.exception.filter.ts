import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Response } from 'express';

import { InternalException } from '../exceptions/internal.exception';

@Catch(InternalException)
export class InternalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(InternalExceptionFilter.name);

  catch(exception: InternalException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    return response.status(exception.code).json({
      message: exception.message,
      code: exception.code,
    });
  }
}

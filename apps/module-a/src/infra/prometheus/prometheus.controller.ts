import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrometheusController as PrometheusController2 } from '@willsoto/nestjs-prometheus';

@ApiTags('prometheus')
@Controller('prometheus')
export class PrometheusController extends PrometheusController2 {
  @Get()
  async index(@Res({ passthrough: true }) response: Response) {
    return super.index(response);
  }
}

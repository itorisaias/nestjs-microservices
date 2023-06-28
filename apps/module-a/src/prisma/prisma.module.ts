import { Global, Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '.prisma/client/module-a';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: any) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

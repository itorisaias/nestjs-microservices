import { Test, TestingModule } from '@nestjs/testing';
import { AzureServiceBusService } from './azure-service-bus.service';

describe('AzureServiceBusService', () => {
  let service: AzureServiceBusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureServiceBusService],
    }).compile();

    service = module.get<AzureServiceBusService>(AzureServiceBusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

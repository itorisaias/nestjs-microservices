import { Test, TestingModule } from '@nestjs/testing';
import { ModuleAController } from './module-a.controller';
import { ModuleAService } from './module-a.service';

describe('ModuleAController', () => {
  let moduleAController: ModuleAController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ModuleAController],
      providers: [ModuleAService],
    }).compile();

    moduleAController = app.get<ModuleAController>(ModuleAController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(moduleAController.getHello()).toBe('Hello World!');
    });
  });
});

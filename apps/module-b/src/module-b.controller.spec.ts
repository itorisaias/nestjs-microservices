import { Test, TestingModule } from '@nestjs/testing';
import { ModuleBController } from './module-b.controller';
import { ModuleBService } from './module-b.service';

describe('ModuleBController', () => {
  let moduleBController: ModuleBController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ModuleBController],
      providers: [ModuleBService],
    }).compile();

    moduleBController = app.get<ModuleBController>(ModuleBController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(moduleBController.getHello()).toBe('Hello World!');
    });
  });
});

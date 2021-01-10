import { Test, TestingModule } from '@nestjs/testing';
import { SuggestUserController } from './suggest-user.controller';

describe('SuggestUserController', () => {
  let controller: SuggestUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuggestUserController],
    }).compile();

    controller = module.get<SuggestUserController>(SuggestUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

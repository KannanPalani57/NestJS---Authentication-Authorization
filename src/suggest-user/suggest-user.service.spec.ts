import { Test, TestingModule } from '@nestjs/testing';
import { SuggestUserService } from './suggest-user.service';

describe('SuggestUserService', () => {
  let service: SuggestUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuggestUserService],
    }).compile();

    service = module.get<SuggestUserService>(SuggestUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

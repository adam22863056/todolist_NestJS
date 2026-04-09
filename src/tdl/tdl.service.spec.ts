import { Test, TestingModule } from '@nestjs/testing';
import { TdlService } from './tdl.service';

describe('TdlService', () => {
  let service: TdlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TdlService],
    }).compile();

    service = module.get<TdlService>(TdlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

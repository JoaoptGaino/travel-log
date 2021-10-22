import { Test, TestingModule } from '@nestjs/testing';
import { PlacesTravelledService } from './places-travelled.service';

describe('PlacesTravelledService', () => {
  let service: PlacesTravelledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesTravelledService],
    }).compile();

    service = module.get<PlacesTravelledService>(PlacesTravelledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

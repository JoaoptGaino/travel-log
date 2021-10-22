import { Test, TestingModule } from '@nestjs/testing';
import { PlacesTravelledController } from './places-travelled.controller';
import { PlacesTravelledService } from './places-travelled.service';

describe('PlacesTravelledController', () => {
  let controller: PlacesTravelledController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacesTravelledController],
      providers: [PlacesTravelledService],
    }).compile();

    controller = module.get<PlacesTravelledController>(PlacesTravelledController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

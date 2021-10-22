import { Module } from '@nestjs/common';
import { PlacesTravelledService } from './places-travelled.service';
import { PlacesTravelledController } from './places-travelled.controller';

@Module({
  controllers: [PlacesTravelledController],
  providers: [PlacesTravelledService]
})
export class PlacesTravelledModule {}

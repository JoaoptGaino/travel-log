import { Injectable } from '@nestjs/common';
import { CreatePlacesTravelledDto } from './dto/create-places-travelled.dto';
import { UpdatePlacesTravelledDto } from './dto/update-places-travelled.dto';

@Injectable()
export class PlacesTravelledService {
  create(createPlacesTravelledDto: CreatePlacesTravelledDto) {
    return 'This action adds a new placesTravelled';
  }

  findAll() {
    return `This action returns all placesTravelled`;
  }

  findOne(id: number) {
    return `This action returns a #${id} placesTravelled`;
  }

  update(id: number, updatePlacesTravelledDto: UpdatePlacesTravelledDto) {
    return `This action updates a #${id} placesTravelled`;
  }

  remove(id: number) {
    return `This action removes a #${id} placesTravelled`;
  }
}

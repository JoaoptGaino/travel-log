import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacesTravelledService } from './places-travelled.service';
import { CreatePlacesTravelledDto } from './dto/create-places-travelled.dto';
import { UpdatePlacesTravelledDto } from './dto/update-places-travelled.dto';

@Controller('places-travelled')
export class PlacesTravelledController {
  constructor(private readonly placesTravelledService: PlacesTravelledService) {}

  @Post()
  create(@Body() createPlacesTravelledDto: CreatePlacesTravelledDto) {
    return this.placesTravelledService.create(createPlacesTravelledDto);
  }

  @Get()
  findAll() {
    return this.placesTravelledService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesTravelledService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlacesTravelledDto: UpdatePlacesTravelledDto) {
    return this.placesTravelledService.update(+id, updatePlacesTravelledDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesTravelledService.remove(+id);
  }
}

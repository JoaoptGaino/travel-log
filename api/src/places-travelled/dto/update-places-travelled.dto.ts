import { PartialType } from '@nestjs/mapped-types';
import { CreatePlacesTravelledDto } from './create-places-travelled.dto';

export class UpdatePlacesTravelledDto extends PartialType(CreatePlacesTravelledDto) {}

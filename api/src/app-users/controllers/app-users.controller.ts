import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AppUsersService } from '../services/app-users.service';
import { CreateAppUserDto } from '../dto/create-app-user.dto';
import { UpdateAppUserDto } from '../dto/update-app-user.dto';
import { Public } from 'src/decorators';
import { Prisma } from '.prisma/client';

@Controller('app-users')
export class AppUsersController {
  constructor(private readonly appUsersService: AppUsersService) {}

  @Public()
  @Post()
  create(@Body() createAppUserDto: CreateAppUserDto) {
    return this.appUsersService.create(createAppUserDto);
  }

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('limit') limit?: string,
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,
    @Query('sort') sort?: Prisma.AppUserOrderByWithRelationInput,
    @Query('username') username?: string,
    @Query('email') email?: string,
    @Query('cityId') cityId?: string,
    @Query('fullName') fullName?: string,
  ) {
    const where = {
      username: { contains: username, mode: 'insensitive' },
      email: { contains: email, mode: 'insensitive' },
      cityId,
      fullName: { contains: fullName, mode: 'insensitive' },
    } as Prisma.AppUserWhereInput;
    const totalCount = await this.appUsersService.count({ where });
    const allUsers = await this.appUsersService.findAll({
      take: limit || take ? Number(limit ?? take) : undefined,
      orderBy: sort,
      skip: skip && Number(skip),
      cursor: cursor && {
        id: cursor,
      },
    });
    return {
      total: totalCount,
      users: allUsers,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appUsersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppUserDto: UpdateAppUserDto) {
    return this.appUsersService.update(id, updateAppUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appUsersService.remove(id);
  }
}

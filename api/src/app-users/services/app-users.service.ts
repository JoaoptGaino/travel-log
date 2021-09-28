import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PasswordService } from '../../auth/services/password.service';
import { PrismaService } from 'src/prisma.service';
import { transformerUnique } from 'src/utils';
import { CreateAppUserDto } from '../dto/create-app-user.dto';
import { UpdateAppUserDto } from '../dto/update-app-user.dto';
import { AppUser } from '../entities/app-user.entity';
import { Prisma } from '.prisma/client';

@Injectable()
export class AppUsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}
  async create(data: CreateAppUserDto): Promise<AppUser> {
    const hashedPassword = await this.passwordService.hashPassword(
      data.password,
    );
    const entityToCreate = {
      ...data,
      password: hashedPassword,
    };
    const createdEntity = await this.prisma.appUser.create({
      data: entityToCreate,
    });
    return transformerUnique(createdEntity);
  }

  count = this.prisma.appUser.count;
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AppUserWhereUniqueInput;
    where?: Prisma.AppUserWhereInput;
    orderBy?: Prisma.AppUserOrderByWithRelationInput;
  }): Promise<AppUser[]> {
    const { cursor, orderBy, skip, take, where } = params;
    const entities = await this.prisma.appUser.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return entities;
  }

  async findOne(id: string): Promise<AppUser> {
    const entity = await this.prisma.appUser.findUnique({ where: { id } });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
  async findUserByEmail(email: string) {
    const entity = await this.prisma.appUser.findFirst({ where: { email } });
    return entity;
  }

  async update(
    id: string,
    updateAppUserDto: UpdateAppUserDto,
  ): Promise<AppUser> {
    try {
      const updatedEntity = await this.prisma.appUser.update({
        where: { id },
        data: updateAppUserDto,
      });
      return updatedEntity;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async remove(id: string): Promise<AppUser> {
    try {
      const deletedEntity = await this.prisma.appUser.delete({ where: { id } });
      return deletedEntity;
    } catch (err) {
      throw new BadRequestException();
    }
  }
}

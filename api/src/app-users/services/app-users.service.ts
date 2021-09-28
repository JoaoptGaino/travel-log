import { Injectable } from '@nestjs/common';
import { PasswordService } from '../../auth/services/password.service';
import { PrismaService } from 'src/prisma.service';
import { transformerUnique } from 'src/utils';
import { CreateAppUserDto } from '../dto/create-app-user.dto';
import { UpdateAppUserDto } from '../dto/update-app-user.dto';
import { AppUser } from '../entities/app-user.entity';

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

  async findAll(): Promise<AppUser[]> {
    const users = await this.prisma.appUser.findMany({});
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} appUser`;
  }
  async findUserByEmail(email: string) {
    const entity = await this.prisma.appUser.findFirst({ where: { email } });
    return entity;
  }

  update(id: number, updateAppUserDto: UpdateAppUserDto) {
    return `This action updates a #${id} appUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appUser`;
  }
}

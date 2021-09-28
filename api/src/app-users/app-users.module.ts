import { Module } from '@nestjs/common';
import { AppUsersService } from './services/app-users.service';
import { AppUsersController } from './controllers/app-users.controller';
import { PrismaService } from 'src/prisma.service';
import { PasswordService } from '../auth/services/password.service';

@Module({
  controllers: [AppUsersController],
  providers: [AppUsersService, PasswordService, PrismaService],
  exports: [AppUsersService],
})
export class AppUsersModule {}

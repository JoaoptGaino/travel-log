import { Module } from '@nestjs/common';
import { AppUsersModule } from './app-users/app-users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [AppUsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

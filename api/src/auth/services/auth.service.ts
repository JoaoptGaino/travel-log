import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppUsersService } from 'src/app-users/services/app-users.service';
import { IAuthenticatedUser, IUserSession } from '../context/types';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly appUserService: AppUsersService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<IAuthenticatedUser> {
    const user = await this.appUserService.findUserByEmail(email);
    const isPassword = await this.passwordService.comparePassword(
      password,
      user.password,
    );

    if (user && isPassword) {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
      };
    }
    return null;
  }
  async login(user: IAuthenticatedUser) {
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

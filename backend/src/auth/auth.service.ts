import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { createHash } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user: User = await this.userService.findByEmail(email);

    if (
      user &&
      user.password.toString() ===
        createHash('sha256').update(password).digest('hex')
    ) {
      return this.login(user);
    }
    return null;
  }

  login(user: User) {
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    delete user.password;

    const payload = { ...user, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '1h',
        secret: '@1q2w3e',
      }),
    };
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { loginDto } from 'src/dto/login.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authservice: AuthService) {
    super();
  }

  async validate(username: string, loginDto: loginDto): Promise<any> {
    const user = await this.authservice.validateUser(
      username,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

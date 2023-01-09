import { Injectable } from '@nestjs/common';
import { loginDto } from 'src/dto/login.dto';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne({ username });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}

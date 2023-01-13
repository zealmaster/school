import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { loginDto } from 'src/dto/login.dto';
import { userDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async fetchUsers() {
    return await this.userService.fetchUsers();
  }
  @Post('signup')
  signUp(@Body() userDto: userDto) {
    return this.userService.signUp(userDto);
  }

  @Post('login')
  login(@Param() username: string, @Body() loginDto: loginDto) {
    return this.userService.login(username, loginDto);
  }
}

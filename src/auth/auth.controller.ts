import {
  Controller,
  Get,
  Request,
  UseGuards,
  Session,
  Post,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';

@Controller('auth')
export class AuthController {

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const user = req.user;
    return user;
  }

  @Get('logout')
  logout(@Session() session: Record<string, any>) {
    //Destroy sessiont
    session.Destroy;
    return 'Logout successful';
  }

  @Get()
  protected() {
    return {
      message: 'This route is protected against unauthenticated users!',
    };
  }
}

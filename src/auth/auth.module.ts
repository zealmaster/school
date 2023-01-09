import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ session: true }),
    TypeOrmModule.forFeature([user]),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

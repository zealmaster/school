import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { location } from './entity/location.entity';
import { school } from './entity/school.entity';
import { LocationModule } from './location/location.module';
import { SchoolModule } from './school/school.module';
import { UserModule } from './user/user.module';
import { user } from './entity/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    SchoolModule,
    LocationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'school',
      entities: [school, location, user],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}

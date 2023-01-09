import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { school } from 'src/entity/school.entity';
import { location } from 'src/entity/location.entity';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { LocationModule } from 'src/location/location.module';
import { LocationService } from 'src/location/location.service';
import { user } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([school, location, user]), LocationModule],
  controllers: [SchoolController],
  providers: [SchoolService, LocationService, UserService],
})
export class SchoolModule {}

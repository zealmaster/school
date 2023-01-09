import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { location } from 'src/entity/location.entity';
import { school } from 'src/entity/school.entity';
import { SchoolService } from 'src/school/school.service';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

@Module({
  imports: [TypeOrmModule.forFeature([location, school])],
  controllers: [LocationController],
  providers: [LocationService, SchoolService],
})
export class LocationModule {}

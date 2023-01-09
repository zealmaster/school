import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { locationDto } from 'src/dto/location.dto';
import { schoolDto } from 'src/dto/school.dto';
import { location } from 'src/entity/location.entity';
import { school } from 'src/entity/school.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(location)
    private locationRepository: Repository<location>,
    @InjectRepository(school)
    private schoolRepository: Repository<school>,
  ) {}

  fetchLocation() {
    return this.locationRepository.find({ relations: ['schools'] });
  }

  createLocation(locationDto: locationDto) {
    return this.locationRepository.save(locationDto);
  }

  getLocationById(id){
    return this.locationRepository.findOneBy({id});
  }
}

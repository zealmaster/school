import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { schoolDto } from 'src/dto/school.dto';
import { UpdateSchoolDto } from 'src/dto/updateSchool.dto';
import { location } from 'src/entity/location.entity';
import { school } from 'src/entity/school.entity';
import { user } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(school)
    private schoolRepository: Repository<school>,
    @InjectRepository(location)
    private locationRepository: Repository<location>,
  ) {}

  fetchSchool() {
    return this.schoolRepository.find({ relations: ['location', 'user'] });
  } 

  async schoolById(id) {
    return await this.schoolRepository.findOneBy({ id });
  }

  updateSchool(id, updateDto: UpdateSchoolDto) {
    return this.schoolRepository.update({ id }, { ...updateDto });
  }

  deleteSchool(id) {
    return this.schoolRepository.delete(id);
  }

  addSchool(id, schoolDto: schoolDto) {
    const newSchool = this.schoolRepository.create({...schoolDto });
    return this.schoolRepository.save(newSchool);
  }
}

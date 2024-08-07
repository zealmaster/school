import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddSubjectDto } from './dto/addSubject.dto';
import { UpdateSubjectDto } from './dto/updateSubject.dto';
import { Subject } from 'src/entity/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepo: Repository<Subject>,
  ) {}

  public async addSubject(subject: AddSubjectDto) {
    const existingSubject = await this.subjectRepo.findOneBy({
      name: subject.name,
      level: subject.level,
    });
    if (existingSubject) return 'Subject already added';
    return await this.subjectRepo.save(subject);
  }

  public async updateSubject(id: number, subject: UpdateSubjectDto) {
    await this.subjectRepo.update(id, subject);
    return 'Updated successfully';
  }

  public async getAllSubject() {
    return await this.subjectRepo.find();
  }
}

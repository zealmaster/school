import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { AuthGuard } from '@nestjs/passport';
import { AddSubjectDto } from 'src/dto/addSubject.dto';
import { UpdateSubjectDto } from 'src/dto/updateSubject.dto';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Post('add-subject')
  @UseGuards(AuthGuard('jwt'))
  async addSubject(@Body() subject: AddSubjectDto) {
    return await this.subjectService.addSubject(subject);
  }

  @Put('update-subject/:id')
  @UseGuards(AuthGuard('jwt'))
  async updateSubject(
    @Param('id') id: number,
    @Body() subject: UpdateSubjectDto,
  ) {
    return await this.subjectService.updateSubject(id, subject);
  }
}

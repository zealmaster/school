import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Put, 
  Delete
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { schoolDto } from '../dto/school.dto';
import { LocationService } from '../location/location.service';
import { school } from '../entity/school.entity';
import { UpdateSchoolDto } from '../dto/updateSchool.dto';
import { UserService } from 'src/user/user.service';


@Controller('school')
export class SchoolController {
  constructor(
    private schoolService: SchoolService,
    private locationService: LocationService,
    private userService: UserService,
  ) {}

  @Get('')
  getSchool(){
    return this.schoolService.fetchSchool();
  }
  @Get(':id')
  async schoolById(@Param('id', ParseIntPipe) id: number) {
    const aschool = await this.schoolService.schoolById(id);
    return {
      name: aschool.name,
      address: aschool.address,
      location: aschool.location,
    };
  }

  @Put(':id')
  async updateSchool(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateSchoolDto,
  ) {
    return await this.schoolService.updateSchool(id, updateDto);
  }

  @Delete(':id')
  async removeSchool(@Param('id', ParseIntPipe) id: number) {
    this.schoolService.deleteSchool(id);
    return 'SChool removed from the database';
  }
  @Post(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async addSchool(
    @Param('id', ParseIntPipe) id: number,
    @Body() schoolData: schoolDto,
  ): Promise<school> {
    const newLocation = this.locationService.getLocationById({ id });
    // const user = await this.userService.findUser(id);
    return await this.schoolService.addSchool(newLocation, { ...schoolData });
  }
}

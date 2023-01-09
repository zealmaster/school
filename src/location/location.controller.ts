import {
  Controller,
  Post,
  ValidationPipe,
  Body,
  UsePipes,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { locationDto } from 'src/dto/location.dto';
import { schoolDto } from 'src/dto/school.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get('')
  async getLocation() {
  const dLocation = await this.locationService.fetchLocation();
  return dLocation;
  }
  @Post()
  @UsePipes(ValidationPipe)
  addLocation(@Body() locationDto: locationDto) {
    return this.locationService.createLocation(locationDto);
  }
  @Get(':id')
  async getLocationId(@Param('id', ParseIntPipe) id: number) {
    return await this.locationService.getLocationById(id);
  }
}

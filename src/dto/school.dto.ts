import { IsNotEmpty, Length } from 'class-validator';
export class schoolDto {
  @IsNotEmpty()
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  @Length(3)
  address: string;

  locationId: number;

}

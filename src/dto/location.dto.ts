import { IsNotEmpty, Length } from 'class-validator';

export class locationDto {
  @IsNotEmpty()
  @Length(3)
  location: string;
}

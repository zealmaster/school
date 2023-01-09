import { IsNotEmpty, Length } from 'class-validator';
export class userDto {
  @IsNotEmpty()
  @Length(3, 255)
  username: string;

  @IsNotEmpty()
  @Length(3)
  email: string;

  @IsNotEmpty()
  @Length(3)
  password: string;

}

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTeatureDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}

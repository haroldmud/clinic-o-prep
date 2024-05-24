import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  role?: string;
}

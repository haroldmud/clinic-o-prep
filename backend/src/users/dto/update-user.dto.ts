import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  role?: string;
}

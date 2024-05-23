import { IsOptional, IsString, isString,  } from "class-validator";

export class CreateUserDto {
  @IsString()
  email : string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  role: string;
}

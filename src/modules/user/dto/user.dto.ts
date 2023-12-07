import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  Email: string;

  @IsString()
  @IsOptional()
  FullName?: string;

  @IsString()
  @IsNotEmpty()
  Password: string;
}

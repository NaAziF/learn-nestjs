import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  Email: string;

  @IsNotEmpty()
  @IsString()
  Password: string;
}

export class ResetPasswordDto {
  @IsEmail()
  @IsNotEmpty()
  Email: string;

  @IsNumber()
  @IsNotEmpty()
  Otp?: number;

  @IsString()
  @IsNotEmpty()
  NewPassword: string;
}

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { UserDto } from '../user/dto';
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Post('login')
  logIn(@Body() req: LoginDto): object {
    return this.AuthService.checkLogIn(req);
  }

  @Post('signup')
  signup(@Body() req: UserDto): object {
    return this.AuthService.CreateAccount(req);
  }
}

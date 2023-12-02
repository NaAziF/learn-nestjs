import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Post()
  logIn(@Req() req: any): string {
    return this.AuthService.checkLogIn(req.body.userName, req.body.password);
  }
}

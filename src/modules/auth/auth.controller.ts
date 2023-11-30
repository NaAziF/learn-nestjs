import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseService } from '../mongoose.db/mongoose.service';

@Controller('auth')
export class AuthController {
  constructor(
    private AuthService: AuthService,
    private MongooseService: MongooseService,
  ) {}
  @Post()
  logIn(@Req() req: any) {
    return this.AuthService.checkLogIn(req.body.userName, req.body.password);
  }
}

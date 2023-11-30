import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  checkLogIn(userName: string, password: string) {
    return `Login Success For ${userName}`;
  }
}

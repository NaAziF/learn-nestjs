import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  sayHello(): string {
    return 'hello from user service this is public endpoint';
  }
}

import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  getUser() {
    return this.UserService.sayHello();
  }
  @Post()
  addUser() {
    return 'user added';
  }
  @Put()
  putUser() {
    return 'user put';
  }
  @Patch()
  patchUser() {
    return 'User Patched';
  }
  @Delete()
  deleteUser() {
    return 'user deleted';
  }
}

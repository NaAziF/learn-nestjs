import { Controller, Get, Req, Post, Param } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('get')
  getHello(): string {
    return 'hello GET';
  }
  @Post('set')
  setHello2(@Req() req: any): string {
    console.log(req.body.Name);

    return `hello Mr. ${req.body.Name}`;
  }

  @Get(':id')
  setHello(@Param() prm: any): string {
    return `set user ${prm.id}`;
  }
}

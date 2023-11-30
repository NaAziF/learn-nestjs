import { Controller, Get, Post, Req } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private ChatService: ChatService) {}
  @Post()
  sendMessage(@Req() req: any) {
    return this.ChatService.saveMessage(req.body);
  }
  @Get()
  getMessage(@Req() req: any) {
    return this.ChatService.getMessage(req.body);
  }
}

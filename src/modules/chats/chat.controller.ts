import { Controller, Get, Post, Req } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private ChatService: ChatService) {}

  @Post()
  async saveMessage(@Req() req: any): Promise<string> {
    return await this.ChatService.saveMessage(req.body);
  }
  @Get()
  async getMessage(@Req() req: any): Promise<string> {
    return await this.ChatService.getMessage(req.body);
  }
}

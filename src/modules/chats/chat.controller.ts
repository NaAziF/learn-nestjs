import { Controller, Get, Post, Req } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MongoService } from '../mongodb/mongodb.service';

@Controller('chat')
export class ChatController {
  constructor(
    private ChatService: ChatService,
    private MongoService: MongoService,
  ) {}

  @Post()
  saveMessage(@Req() req: any): string {
    return this.ChatService.saveMessage(req.body);
  }
  @Get()
  getMessage(@Req() req: any): string {
    return this.ChatService.getMessage(req.body);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendMessageDto, RecieveMessageDto } from './dto';

@Controller('chat')
export class ChatController {
  constructor(private ChatService: ChatService) {}

  @Post()
  async saveMessage(@Body() req: SendMessageDto): Promise<string> {
    return await this.ChatService.saveMessage(req);
  }
  @Get()
  async getMessage(@Body() req: RecieveMessageDto): Promise<string> {
    return await this.ChatService.getMessage(req);
  }
}

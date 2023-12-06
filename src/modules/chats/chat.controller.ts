import { Body, Controller, Get, Patch, Post, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendMessageDto, RecieveMessageDto, UpdateMessageDto } from './dto';

@Controller('chat')
export class ChatController {
  constructor(private ChatService: ChatService) {}

  @Post()
  async sendMessage(@Body() req: SendMessageDto): Promise<object> {
    return await this.ChatService.saveMessage(req);
  }

  @Get()
  async getMessage(@Body() req: RecieveMessageDto): Promise<object> {
    return await this.ChatService.getMessage(req);
  }

  @Patch()
  async updateMessage(@Body() req: UpdateMessageDto): Promise<object> {
    return await this.ChatService.updateMessage(req.MessageId);
  }

  @Delete()
  async deleteMessage(@Body() req: UpdateMessageDto): Promise<object> {
    return await this.ChatService.deleteMessage(req.MessageId);
  }
}

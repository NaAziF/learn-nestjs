import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import {
  SendMessageDto,
  RecieveMessageDto,
  UpdateMessageDto,
  DeleteMessageDto,
} from './dto';
import { AuthGuard } from '../auth/guard/auth.guard';

@Controller('chat')
export class ChatController {
  constructor(private ChatService: ChatService) {}
  @UseGuards(AuthGuard)
  @Post()
  async sendMessage(@Body() req: SendMessageDto): Promise<object> {
    return await this.ChatService.saveMessage(req);
  }
  @UseGuards(AuthGuard)
  @Get()
  async getMessage(@Body() req: RecieveMessageDto): Promise<object> {
    return await this.ChatService.getMessage(req);
  }
  @UseGuards(AuthGuard)
  @Patch()
  async updateMessage(@Body() req: UpdateMessageDto): Promise<object> {
    return await this.ChatService.updateMessage(req);
  }
  @UseGuards(AuthGuard)
  @Delete()
  async deleteMessage(@Body() req: DeleteMessageDto): Promise<object> {
    return await this.ChatService.deleteMessage(req.MessageId);
  }
}

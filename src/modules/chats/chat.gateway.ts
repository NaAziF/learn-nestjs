import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';

import { SendMessageDto } from './dto';
import { plainToClass } from 'class-transformer';

@WebSocketGateway({
  cors: {
    origin: ['*'],
    methods: ['*'],
    credentials: true,
  },
})
export class ChatGateway implements OnModuleInit {
  constructor(private ChatService: ChatService) {}

  @WebSocketServer()
  server;
  onModuleInit() {
    this.server.on('connect', (socket) => {
      socket.on('disconnect', (sock) => {});
    });
  }
  @SubscribeMessage('message')
  @UsePipes(SendMessageDto)
  async handleMessage(@MessageBody() message: any): Promise<void> {
    // message = JSON.parse(message);
    const chatDto = plainToClass(SendMessageDto, message);
    console.log(chatDto);

    // Broadcast Message to any particular client
    //let chatMessage: string = await this.ChatService.saveMessage(message);
    //this.server.emit('message', chatMessage);
    //this.server.to().emit('message', message);
    // this.ChatService.saveMessage(message);
  }
}

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
      socket.on('disconnect', (sock) => {
        console.log(`${socket.id} Disconnected`);
        //remove session id from cache
      });
    });
  }
  @SubscribeMessage('message')
  @UsePipes(SendMessageDto)
  async handleMessage(@MessageBody() message: any): Promise<void> {
    message = JSON.parse(message);

    // Save Message to database
    let chatMessage: string = await this.ChatService.saveMessage(message);
    //this.server.emit('message', chatMessage);

    // Broadcast Message to any particular client using session id
    this.server.to().emit('message', chatMessage);
  }
}

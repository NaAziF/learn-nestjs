import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { log } from 'console';

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
      // console.log(socket.id);
      socket.on('disconnect', (sock) => {
        log('BELOW Disconnected');
        console.log(sock);
        log(socket.id);
      });
    });
  }
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    // Broadcast Message to any particular client
    this.server.to().emit('message', ' hello Your data recived');

    console.log(message);
    //  this.ChatService.saveMessage();
  }
}

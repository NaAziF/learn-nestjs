import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: {
    origin: ['*'],
    methods: ['*'],
    credentials: true,
  },
})
export class ChatGateway {
  constructor(private ChatService: ChatService) {}

  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', ' hello Your data recived');
    console.log(message);
    this.ChatService.saveMessage(message);
  }
}

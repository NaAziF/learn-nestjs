import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { UsePipes, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: ['*'],
    methods: ['*'],
    credentials: true,
  },
})
export class ChatGateway implements OnModuleInit {
  constructor(
    private ChatService: ChatService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @WebSocketServer()
  server;

  onModuleInit() {
    this.server.on('connection', async (socket: Socket) => {
      // save session Id in cache

      await this.cacheManager.set(
        `${socket.handshake.headers.userid}`,
        socket.id,
        0,
      );

      socket.on('disconnect', async (sock) => {
        //remove session id from cache

        await this.cacheManager.del(`${socket.handshake.headers.userid}`);
      });
    });
  }

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() message: any): Promise<void> {
    message = JSON.parse(message);

    const to = await this.cacheManager.get(`${message.RecieverId}`);
    // Save Message to database
    let chatMessage: object = await this.ChatService.saveMessage(
      message,
      to == undefined ? 0 : 1,
    );

    // Broadcast Message to any particular client using session id in client is online
    if (to) {
      this.server.to(to).emit('message', chatMessage);
    }
  }
}

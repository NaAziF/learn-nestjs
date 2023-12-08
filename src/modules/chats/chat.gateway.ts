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
import { JwtService } from '@nestjs/jwt';
import { JWTSECRET } from '../auth/constants';

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
    private JwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @WebSocketServer()
  server;

  onModuleInit() {
    this.server.on('connection', async (socket: Socket) => {
      // validate the jwt from connection handshake
      const [type, token] =
        socket.handshake.headers.authorization?.split(' ') ?? [];
      let payload: any;
      try {
        payload = await this.JwtService.verifyAsync(token, {
          secret: JWTSECRET,
        });
      } catch (err) {
        // disconnect the user if not authencated
        this.server.to(socket.id).emit('message', {
          Error: err.message,
          Code: 403,
        });
        socket.disconnect();
        return;
      }
      // extract the userid from jwt token and save it to cache with session id
      await this.cacheManager.set(`${payload.sub}`, socket.id, 0);
      //remove user from online users if he disconnects
      socket.on('disconnect', async (sock) => {
        //remove session id from cache

        await this.cacheManager.del(`${payload.sub}`);
      });
    });
  }
  // handle the chats once user is connected
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

import { Injectable } from '@nestjs/common';
import { MongoService } from '../mongodb/mongo.service';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class ChatService {
  constructor(
    private MongoService: MongoService,
    private prisma: PrismaService,
  ) {}

  async saveMessage(msg: any) {
    let user: any = await this.prisma.chat.create({
      data: {
        MessageId: undefined,
        SenderId: msg.sender,
        RecieverId: msg.reciever,
        Message: msg.text,
        MessageStatus: 1,
        Attachments: {},
      },
    });

    return user;
  }
  getMessage(params?: any) {
    return `Message Send to : ${params.Name}`;
  }
}

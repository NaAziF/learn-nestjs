import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { log } from 'console';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(msg: any): Promise<string> {
    let user: any = await this.prisma.chat.create({
      data: {
        SenderId: msg.sender,
        RecieverId: msg.reciever,
        Message: msg.text,
        MessageStatus: 1,
        Attachments: msg.Attachments,
      },
    });

    return user;
  }
  async getMessage(userPayload: any): Promise<string> {
    let chats: any = await this.prisma.chat.findMany({
      where: {
        RecieverId: userPayload.reciever,
      },
    });
    log(userPayload.reciever);
    return chats;
  }
}

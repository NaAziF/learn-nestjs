import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendMessageDto, RecieveMessageDto } from './dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(dto: SendMessageDto): Promise<string> {
    let user: any = await this.prisma.chat.create({
      data: {
        SenderId: dto.SenderId,
        RecieverId: dto.RecieverId,
        Message: dto.Message,
        MessageStatus: 1,
        Attachments: dto.Attachments,
      },
    });

    return user;
  }
  async getMessage(dto: RecieveMessageDto): Promise<string> {
    let chats: any = await this.prisma.chat.findMany({
      where: {
        RecieverId: dto.RecieverId,
        SenderId: dto.SenderId,
        IsDeleted: false,
      },
      orderBy: {
        CreatedAt: 'desc',
      },
    });
    return chats;
  }
}

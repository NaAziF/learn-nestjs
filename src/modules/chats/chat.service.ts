import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendMessageDto, RecieveMessageDto } from './dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(dto: SendMessageDto, status = 0): Promise<object> {
    let user: object = await this.prisma.chat.create({
      data: {
        SenderId: dto.SenderId,
        RecieverId: dto.RecieverId,
        Message: dto.Message,
        MessageStatus: status,
        Attachments: dto.Attachments,
      },
    });

    return user;
  }
  async getMessage(dto: RecieveMessageDto): Promise<object> {
    //get message from database , requires (RecieverId & SenderId)
    let chats: object = await this.prisma.chat.findMany({
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
  async updateMessage(msgId: string): Promise<object> {
    // update messageStatus to enable the features like send,delivered,read etc
    let chat: object = await this.prisma.chat.update({
      data: {
        MessageStatus: 1,
      },
      where: {
        MessageId: msgId,
      },
    });
    return chat;
  }

  async deleteMessage(msgId: string): Promise<object> {
    //Delete Message Method only sets the delete flag true and does not delete the message
    //message can be deleted only within 1 hour after sending
    let validity: Date = new Date();
    validity.setHours(validity.getHours() - 1); //change the subtract number to change validity to delete messages
    let chat: object;
    try {
      chat = await this.prisma.chat.update({
        where: {
          MessageId: msgId,
          CreatedAt: {
            gte: validity,
          },
        },

        data: {
          IsDeleted: true,
        },
      });
    } catch (error) {
      return error.meta;
    }
    return chat;
  }
}

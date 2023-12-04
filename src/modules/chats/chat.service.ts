import { Injectable } from '@nestjs/common';
import { MongoService } from '../mongodb/mongo.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(
    private MongoService: MongoService,
    private prisma: PrismaService,
  ) {}

  saveMessage(msg: any) {
    this.prisma.SaveMessageDemo('ssa');
    this.prisma.$connect();

    this.MongoService.insertMessage('');
    return `Message Saved for : ${msg.Name}`;
  }
  getMessage(params?: any) {
    return `Message Send to : ${params.Name}`;
  }
}

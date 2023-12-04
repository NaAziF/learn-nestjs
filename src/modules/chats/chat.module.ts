import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongoModule } from '../mongodb/mongo.module';
import { MongoService } from '../mongodb/mongo.service';
import { ChatGateway } from './chat.gateway';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [MongoModule, PrismaModule],
  providers: [ChatService, MongoService, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}

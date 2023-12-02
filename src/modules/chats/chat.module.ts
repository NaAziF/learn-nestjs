import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongoModule } from '../mongodb/monodb.module';
import { MongoService } from '../mongodb/mongodb.service';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [MongoModule],
  providers: [ChatService, MongoService, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}

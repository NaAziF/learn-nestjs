import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '../mongodb/monodb.module';
import { MongooseService } from '../mongodb/mongodb.service';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [MongooseModule],
  providers: [ChatService, MongooseService, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}

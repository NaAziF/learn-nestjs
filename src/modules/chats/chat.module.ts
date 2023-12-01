import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '../mongoose.db/mongoose.module';
import { MongooseService } from '../mongoose.db/mongoose.service';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [MongooseModule],
  providers: [ChatService, MongooseService, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}

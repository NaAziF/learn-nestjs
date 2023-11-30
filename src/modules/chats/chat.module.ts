import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '../mongoose.db/mongoose.module';

@Module({
  imports: [MongooseModule],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}

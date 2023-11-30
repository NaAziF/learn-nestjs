import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ChatModule } from './modules/chats/chat.module';

@Module({
  imports: [UserModule, ChatModule],
})
export class AppModule {}

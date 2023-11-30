import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ChatModule } from './modules/chats/chat.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, ChatModule, AuthModule],
})
export class AppModule {}

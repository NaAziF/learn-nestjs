import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ChatModule } from './modules/chats/chat.module';
import { AuthModule } from './modules/auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    UserModule,
    ChatModule,
    AuthModule,
    CacheModule.register({ isGlobal: true }),
  ],
})
export class AppModule {}

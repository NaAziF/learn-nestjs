import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { ChatModule } from './modules/chats/chat.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    ChatModule,
    AuthModule,
    CacheModule.register({ isGlobal: true }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}

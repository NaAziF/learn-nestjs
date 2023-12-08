import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongoModule } from '../mongodb/mongo.module';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTSECRET, JWTVALIDITY } from './constants';

@Module({
  imports: [
    MongoModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: JWTSECRET,
      signOptions: {
        expiresIn: JWTVALIDITY,
        issuer: 'user',
        jwtid: '3234jwt',
        keyid: '23323key',
      },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

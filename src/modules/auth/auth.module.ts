import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongoModule } from '../mongodb/mongo.module';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTSECRET } from './constants';

@Module({
  imports: [
    MongoModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: JWTSECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

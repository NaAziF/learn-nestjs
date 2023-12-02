import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongoModule } from '../mongodb/monodb.module';

@Module({
  imports: [MongoModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

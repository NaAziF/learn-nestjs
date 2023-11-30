import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '../mongoose.db/mongoose.module';

@Module({
  imports: [MongooseModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

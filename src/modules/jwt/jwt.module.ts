import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';

@Module({
  imports: [],
  providers: [JwtService],
})
export class JwtModule {}

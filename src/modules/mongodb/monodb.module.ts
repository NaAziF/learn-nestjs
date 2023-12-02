import { Module } from '@nestjs/common';
import { MongoService } from './mongodb.service';

@Module({
  imports: [],
  providers: [MongoService],
})
export class MongoModule {}

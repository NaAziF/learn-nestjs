import { Injectable } from '@nestjs/common';

@Injectable()
export class MongooseService {
  insertMessage(message: string) {
    return 'message saved';
  }
}

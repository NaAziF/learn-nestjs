import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoService {
  insertMessage(message: string) {
    return 'message saved';
  }
}

import { Injectable } from '@nestjs/common';
import { MongoService } from '../mongodb/mongodb.service';

@Injectable()
export class ChatService {
  constructor(private MongoService: MongoService) {}
  saveMessage(msg: any) {
    this.MongoService.insertMessage('');
    return `Message Saved for : ${msg.Name}`;
  }
  getMessage(params?: any) {
    return `Message Send to : ${params.Name}`;
  }
}

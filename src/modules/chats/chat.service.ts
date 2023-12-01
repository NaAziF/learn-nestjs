import { Injectable } from '@nestjs/common';
import { MongooseService } from '../mongodb/mongodb.service';

@Injectable()
export class ChatService {
  constructor(private MongooseService: MongooseService) {}
  saveMessage(msg: any) {
    this.MongooseService.insertMessage('');
    return `Message Saved for : ${msg.Name}`;
  }
  getMessage(params?: any) {
    return `Message Send to : ${params.Name}`;
  }
}

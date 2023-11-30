import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  saveMessage(msg: any) {
    return `Message Saved for : ${msg.Name}`;
  }
  getMessage(params?: any) {
    return `Message Send to : ${params.Name}`;
  }
}

import {
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsJSON,
} from 'class-validator';

export class SendMessageDto {
  @IsNumber()
  @IsNotEmpty()
  SenderId: number;

  @IsNumber()
  @IsNotEmpty()
  RecieverId: number;

  @IsString()
  @IsNotEmpty()
  Message: string;

  @IsOptional()
  @IsJSON()
  Attachments?: object;
}
export class RecieveMessageDto {
  @IsNumber()
  @IsNotEmpty()
  SenderId: number;

  @IsNumber()
  @IsNotEmpty()
  RecieverId: number;
}

export class UpdateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  SenderId: number;
  @IsNumber()
  @IsNotEmpty()
  RecieverId: number;
  @IsNumber()
  @IsNotEmpty()
  MessageStatus: number;
}

export class DeleteMessageDto {
  @IsString()
  @IsNotEmpty()
  MessageId: string;
}

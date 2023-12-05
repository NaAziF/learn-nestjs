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

  @IsJSON()
  @IsOptional()
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

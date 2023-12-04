import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'test url',
        },
      },
    });
  }

  SaveMessageDemo(msg: String): string {
    return 'saved';
  }
}

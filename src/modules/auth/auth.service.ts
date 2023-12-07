import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto';
import { UserDto } from '../user/dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async checkLogIn(dto: LoginDto): Promise<object> {
    let data: any = await this.prisma.user.findUnique({
      where: {
        Email: dto.Email,
      },
    });
    if (data?.Password !== dto.Password) {
      throw new UnauthorizedException();
    }
    const payload = `{ mail: ${data.Email}, sub: ${data.UserId} }`;
    const pay = { sub: data.UserId, mail: data.Email };
    return await { auth_token: await this.jwtService.signAsync(pay) };
  }
  async CreateAccount(dto: UserDto): Promise<object> {
    let existing: any = await this.prisma.user.findFirst({
      where: {
        Email: dto.Email,
      },
    });
    if (existing) {
      throw new BadRequestException('Email Already Exists');
    }

    let user: object = await this.prisma.user.create({
      data: dto,
    });
    return user;
  }
}

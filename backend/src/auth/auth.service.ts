import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    //step1: find user by email
    const user = await this.prisma.user.findUnique({ where: { email } });
    //step2: check if user exists
    if (!user) {
      throw new NotFoundException(`no user found for email: ${email}`);
    }
    //step3: check if password is correct
    if (user.password !== password) {
      throw new UnauthorizedException('incorrect password');
    }
    //step4: generate access token containing email and return it because login is now successful
    return {
      accessToken: this.jwtService.sign({ email }),
    };
  }
}

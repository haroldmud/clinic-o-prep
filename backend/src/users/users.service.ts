import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany(); //user is the model name
  }

  findOne(id?: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(updateUserDto: UpdateUserDto, id: string) {
    return this.prisma.user.update({
      where: { id }, 
      data: updateUserDto
    });
  }

  remove(id?: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

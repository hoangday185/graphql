import { Injectable } from '@nestjs/common';
import { UserArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/database/prisma.service';
import { NewUserInput } from './dto/new-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneById(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async create(data: NewUserInput) {
    return await this.prisma.user.create({
      data,
    });
  }

  async update(id: string, data: NewUserInput) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return Boolean(
      await this.prisma.user.delete({
        where: { id },
      }),
    );
  }
}

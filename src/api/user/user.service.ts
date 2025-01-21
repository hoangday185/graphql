import { Injectable } from '@nestjs/common';
import { UserArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/database/prisma.service';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';

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
    const user = await this.prisma.user.create({
      data,
    });

    await this.prisma.profile.create({
      data: {
        avatarUrl: '',
        bio: '',
        userId: user.id,
      },
    });

    return user;
  }

  async update(id: string, data: UpdateUserInput) {
    const userData = { email: data.email, name: data.name };
    return await this.prisma.user.update({
      where: { id },
      data: userData,
    });
  }

  async delete(id: string) {
    await this.prisma.profile.deleteMany({
      where: {
        userId: id,
      },
    });

    await this.prisma.post.deleteMany({
      where: {
        authorId: id,
      },
    });

    return Boolean(
      await this.prisma.user.delete({
        where: { id },
      }),
    );
  }

  async findAuthor(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { NewPostInput } from './dto/new-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneById(id: string) {
    return await this.prisma.post.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async create(input: NewPostInput) {
    return await this.prisma.post.create({
      data: input,
    });
  }

  async findPostById(id: string) {
    return await this.prisma.post.findMany({
      where: { authorId: id },
    });
  }

  async update(id: string, input: UpdatePostInput) {
    return await this.prisma.post.update({
      where: { id },
      data: input,
    });
  }

  async delete(id: string) {
    return Boolean(
      await this.prisma.post.delete({
        where: { id },
      }),
    );
  }
}

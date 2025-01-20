import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { NewPostInput } from './dto/new-post.input';

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
}

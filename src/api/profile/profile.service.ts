import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(id: string) {
    return await this.prisma.profile.findUnique({
      where: {
        userId: id,
      },
    });
  }
}

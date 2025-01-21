import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { NewProfileInput } from './dto/new-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

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

  async createProfile(data: NewProfileInput) {
    return await this.prisma.profile.create({
      data,
    });
  }

  async updateProfile(id: string, data: UpdateProfileInput) {
    return await this.prisma.profile.update({
      where: {
        userId: id,
      },
      data,
    });
  }
}

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { ProfileService } from './profile.service';
import { ProfileReslover } from './profile.reslovers';

@Module({
  imports: [PrismaModule],
  providers: [ProfileService, ProfileReslover],
  exports: [ProfileService],
})
export class ProfileModule {}

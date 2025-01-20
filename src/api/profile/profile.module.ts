import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { ProfileService } from './profile.service';

@Module({
  imports: [PrismaModule],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}

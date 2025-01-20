import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'src/database/prisma.module';
import { PostModule } from './post/post.module';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule, PrismaModule, PostModule, ProfileModule],
  providers: [ProfileService],
})
export class ApiModule {}

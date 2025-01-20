import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'src/database/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, PrismaModule, PostModule],
})
export class ApiModule {}

import { PrismaModule } from 'src/database/prisma.module';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.reslovers';
import { PostModule } from '../post/post.module';

@Module({
  imports: [PrismaModule, PostModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}

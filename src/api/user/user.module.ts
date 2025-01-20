import { PrismaModule } from 'src/database/prisma.module';
import { UserService } from './user.service';
import { forwardRef, Module } from '@nestjs/common';
import { UserResolver } from './user.reslovers';
import { PostModule } from '../post/post.module';

@Module({
  imports: [PrismaModule, forwardRef(() => PostModule)],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}

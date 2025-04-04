import { forwardRef, Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostReslovers } from './post.reslovers';
import { PrismaModule } from 'src/database/prisma.module';
import { UserModule } from '../user/user.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [PrismaModule, forwardRef(() => UserModule), RedisModule],
  providers: [PostService, PostReslovers],
  exports: [PostService],
})
export class PostModule {}

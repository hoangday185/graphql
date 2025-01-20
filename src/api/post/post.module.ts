import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostReslovers } from './post.reslovers';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PostService, PostReslovers],
  exports: [PostService],
})
export class PostModule {}

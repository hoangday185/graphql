import { PrismaModule } from 'src/database/prisma.module';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.reslovers';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}

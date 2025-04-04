import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';

@Module({
  imports: [],
  controllers: [],
  providers: [RedisService],
  exports: [RedisService],
  // Add any other modules or providers you need here
})
export class RedisModule {}

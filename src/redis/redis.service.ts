import { Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
@Injectable()
export class RedisService implements OnModuleInit {
  private client: Redis;

  onModuleInit() {
    this.client = new Redis({
      // Nếu NestJS chạy trong Docker Compose thì host là 'cache'
      // Nếu chạy trên host thì bạn có thể set host thành 'localhost'
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    });
  }

  async get(key: string): Promise<string> {
    return await this.client.get(key);
  }

  async set(key: string, value: string): Promise<string> {
    return await this.client.set(key, value);
  }
}

//phân trường hợp những thứ gì cần cache
//create post sẽ phải set lại cache cho list post
//get post sẽ phải check cache trước khi gọi db
//update post sẽ phải set lại cache cho list post

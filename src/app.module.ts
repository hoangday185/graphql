import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ApiModule } from './api/api.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    PrismaModule,
    ApiModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: true,
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}

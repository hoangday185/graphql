import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ApiModule } from './api/api.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
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
  ],
})
export class AppModule {}

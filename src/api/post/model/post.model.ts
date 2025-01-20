import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'post' })
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/api/post/model/post.model';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field((type) => [Post], { nullable: true })
  posts?: Post[];

  @Field()
  updatedAt: Date;
}

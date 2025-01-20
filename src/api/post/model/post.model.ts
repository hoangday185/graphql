import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/api/user/model/user.model';

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

  @Field(() => User, { nullable: true })
  author?: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

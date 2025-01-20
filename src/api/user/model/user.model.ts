import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/api/post/model/post.model';
import { Profile } from 'src/api/profile/model/profile.model';

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

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => Profile, { nullable: true })
  profile?: Profile;

  @Field()
  updatedAt: Date;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'profile' })
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  bio: string;

  @Field({ nullable: true })
  avatarUrl: string;

  @Field()
  userId: string;
}

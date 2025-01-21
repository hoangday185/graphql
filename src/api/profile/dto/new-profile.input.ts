import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewProfileInput {
  @Field(() => String)
  userId: string;

  @Field()
  bio: string;

  @Field()
  avatarUrl: string;
}

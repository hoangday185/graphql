import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProfileInput {
  @Field(() => String)
  bio?: string;

  @Field(() => String)
  avatarUrl?: string;
}
